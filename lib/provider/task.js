(function() {

	var _ = require('lodash');

	function Task(){
		/*
		id
		activity
		parameters
		priority
		result
		locked
		complete
		started
		succeeded
		this.failed = false;
		runat
		*/
	};

	Task.prototype.execute = function(context, parameters) {
		throw new Error("Task must override the execute() function.")
	};

	module.exports = Task;

}).call(this);