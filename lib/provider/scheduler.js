(function() {

	function Scheduler(){
	};

	Scheduler.prototype.start = function(options, callback) {
		throw new Error("Scheduler must override the start() function.")
	};

	module.exports = Scheduler;

}).call(this);