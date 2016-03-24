(function() {

	var _ = require('lodash');
	var task = require('../task');

	function SimpleRunner(){
		this.taskImplementations = {};
	};

	SimpleRunner.prototype = _.create(task.Runner.prototype, { 'constructor': SimpleRunner });

	SimpleRunner.prototype.implement = function(name, taskDefinition) {
		if (taskDefinition instanceof task.Task) {
			this.taskImplementations[name] = taskDefinition;
		} else if (_.isFunction(taskDefinition)) {
			this.taskImplementations[name] = new task.FunctionTask(taskDefinition);
		} else {
			throw new Error("Task implementation requires a Task or function");
		}
	};

	SimpleRunner.prototype.unimplement = function(name) {
		delete this.taskImplementations[name];
	};

	function asyncWrapper(fn, taskObject, parameters, callback) {
		var context = {
			isAsync: false,
			result: null,
			async: function(){
				context.isAsync = true;
				return function(err){
					if (callback) {
						callback(err, context.result);
					}
				}

			}
		};
		var result;
		if (taskObject) {
			result = fn.call(taskObject, context, parameters);
		} else {
			result = fn(context, parameters);
		}
		if (!context.isAsync) {
			if (callback) {
				callback(null, context.result || result);
			}
		}
	};

	SimpleRunner.prototype.run = function(name, parameters, callback) {
		if (!callback && _.isFunction(parameters)) {
			callback = parameters;
			parameters = null;
		}
		var taskRegistration = this.taskRegistrations[name];
		if (!taskRegistration) {
			if (callback) {
				return callback(new Error("Task " + name + " is not registered with this runner"));
			} else {
				throw new Error("Task " + name + " is not registered with this runner");
			}
		}
		if (!taskRegistration instanceof task.Task) {
			asyncWrapper(taskRegistration.execute, taskRegistration, parameters, callback);
		} else if (_.isFunction(taskRegistration)) {
			asyncWrapper(taskRegistration, null, parameters, callback);
		} else {
			if (callback) {
				return callback(new Error("Task " + name + " is not a Task or a function"));
			} else {
				throw new Error("Task " + name + " is not a Task or a function");
			}
		}
	};

	module.exports = SimpleRunner;

}).call(this);


