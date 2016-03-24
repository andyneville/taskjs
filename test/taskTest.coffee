assert = require 'assert'
_ = require 'lodash'

task = require '../index'

taskEnv = null

describe 'Task Library', ->
	describe 'Default Environment', ->
		it 'should have a SimpleRunner for a runner', ->
			assert(task.runner instanceof task.SimpleRunner, "default runner is a SimpleRunner")

		it 'should have a SimpleScheduler for a scheduler', ->
			assert(task.scheduler instanceof task.SimpleScheduler, "default scheduler is a SimpleScheduler")

	describe 'SimpleRunner', ->
		it 'should properly subclass the Runner class', ->
			runner = new task.SimpleRunner()
			assert(runner instanceof task.SimpleRunner, "runner is derived from a SimpleRunner object")
			assert(runner instanceof task.Runner, "runner is derived from a Runner object")

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

	describe 'Non-Default Environment', ->
		before ->
			taskEnv = new task.TaskEnvironment()

		it 'should have a SimpleRunner for a runner', ->
			assert(taskEnv.runner instanceof task.SimpleRunner, "environment runner is a SimpleRunner")
			assert(taskEnv.runner != task.runner, "environment runner is not default runner")

		it 'should have a SimpleScheduler for a scheduler', ->
			assert(taskEnv.scheduler instanceof task.SimpleScheduler, "default scheduler is a SimpleScheduler")
			assert(taskEnv.scheduler != task.scheduler, "environment scheduler is not default scheduler")
