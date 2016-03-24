assert = require 'assert'
_ = require 'lodash'

task = require '../index'

taskEnv = null

describe 'Simple Runner Implementation', ->

	before ->
		taskEnv = new task.TaskEnvironment();

	describe 'SimpleRunner', ->
		it 'should be able to register a task implementation', ->
			taskFn = ->
			taskEnv.implement "test", taskFn
			assert.equal taskEnv.runner.taskImplementations['test'].taskFn, taskFn

		it 'should be able to unregister a task implementation', ->
			assert taskEnv.runner.taskImplementations['test']
			taskEnv.unimplement "test"
			assert !taskEnv.runner.taskImplementations['test']

		#it 'should properly execute a simple function', ->

	describe 'SimpleScheduler', ->
		it 'should properly subclass the Scheduler class', ->
			scheduler = new task.SimpleScheduler()
			assert(scheduler instanceof task.SimpleScheduler, "runner is derived from a SimpleScheduler object")
			assert(scheduler instanceof task.Scheduler, "runner is derived from a Scheduler object")

	describe 'SimpleScheduler', ->
		it 'should properly subclass the Scheduler class', ->
			scheduler = new task.SimpleScheduler()
			assert(scheduler instanceof task.SimpleScheduler, "runner is derived from a SimpleScheduler object")
			assert(scheduler instanceof task.Scheduler, "runner is derived from a Scheduler object")

