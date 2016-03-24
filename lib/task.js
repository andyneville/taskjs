(function() {

	var _ = require('lodash');

	var task = {};
	module.exports = task;

	task.Task = require('./provider/task');
	task.FunctionTask = require('./provider/functionTask');
	task.Runner = require('./provider/runner');
	task.Scheduler = require('./provider/scheduler');
	task.SimpleRunner = require('./simple/simpleRunner');
	task.SimpleScheduler = require('./simple/simpleScheduler');

	function TaskEnvironment(){
		this.runner = new task.SimpleRunner();
		this.scheduler = new task.SimpleScheduler(this.runner);
	};

	TaskEnvironment.prototype.implement = function(name, taskFn) {
		this.runner.implement(name, taskFn);
	};

	TaskEnvironment.prototype.unimplement = function(name) {
		this.runner.unimplement(name);
	};

	TaskEnvironment.prototype.run = function(name, parameters, callback) {
		this.runner.run(name, parameters, callback);
	};

	task.TaskEnvironment = TaskEnvironment;

	var defaultEnvironment = new TaskEnvironment();

	_.assignIn(task, defaultEnvironment);

}).call(this);




