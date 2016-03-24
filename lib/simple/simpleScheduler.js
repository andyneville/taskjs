(function() {

	var _ = require('lodash');
	var task = require('../task');
	var Task = task.Task;

	function SimpleScheduler(runner){
		this.runner = runner;
	};

	SimpleScheduler.prototype = _.create(task.Scheduler.prototype, { 'constructor': SimpleScheduler });

	SimpleScheduler.prototype.start = function(options, callback) {
		
	};

	SimpleScheduler.prototype.run = function(name, parameters, callback) {
		throw new Error("Scheduler must override the run() function.")
	};

	SimpleScheduler.prototype.runAt = function(name, time, parameters, callback) {
		throw new Error("Scheduler must override the runAt() function.")
	};

	module.exports = SimpleScheduler;

}).call(this);