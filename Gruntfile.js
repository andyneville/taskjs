'use strict';
var fs = require('fs');

module.exports = function (grunt) {
	require('time-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		browserify: {
			browser: {
				src: ['./index.js'],
				options: {
					browserifyOptions: {
						standalone: 'task'
					}
				},
				dest: 'dist/task.js'

			},
			"transform": [ "browserify-shim" ]
		},
		uglify: {
			options: {
				mangle: true,
				compress: {
					pure_getters: true
				}
			},
			dist: {
				src: ['<%= browserify.browser.dest %>'],
				dest: 'dist/task.min.js'
			}
		},
		mochaTest: {
			test: {
				options: {
					reporter: 'spec'
				},
				src: ['test/**/*.js']
			}
		},
		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		},
		jshint: {
			files: [
				//'**/*.js',
				'lib/index.js',
				'!node_modules/**/*',
				'!test/**/*',
				'!bower_components/**/*',
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},
		jsdoc : {
			dist : {
				src: ['lib/*.js'],
				options: {
					destination: 'doc',
					template: "node_modules/grunt-jsdoc/node_modules/ink-docstrap/template",
					configure : "jsdoc.conf.json",
				}
			}
		},
		"browserify-shim": {
			"later": "global:later"
		}
	});
	require('jit-grunt')(grunt);
	grunt.registerTask('default', [
		'jshint',
//		'jsdoc',
		'mochaTest',
		'browserify',
		'uglify',
		'karma'
	]);
};