(function() {

	var _ = require('lodash');
	var task = require('../task');

	function FunctionTask(taskFn){
		this.taskFn = taskFn;
	};

	FunctionTask.prototype = _.create(task.Task.prototype, { 'constructor': FunctionTask });

	FunctionTask.prototype.execute = function(context, parameters) {
		return this.taskFn(context, parameters);
	};

	module.exports = FunctionTask;

}).call(this);


