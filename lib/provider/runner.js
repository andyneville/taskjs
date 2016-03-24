(function() {

	function Runner(){
	};

	Runner.prototype.implement = function(name, taskDefinition) {
		throw new Error("Runner must override the implement() function.")
	};

	Runner.prototype.unimplement = function(name) {
		throw new Error("Runner must override the unimplement() function.")
	};

	Runner.prototype.run = function(name, parameters, callback) {
		throw new Error("Runner must override the run() function.")
	};

	module.exports = Runner;

}).call(this);