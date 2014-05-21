/*
 * Generated on 2014-05-16
 * generator-prototype v0.4.32
 *
 *
 * Copyright (c) 2014 Sebastian Fitzner
 * Licensed under the MIT license.
 */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function (grunt) {

	// load only used tasks
	require('jit-grunt')(grunt, {
		cmq: 'grunt-combine-media-queries'
	});
	// measures the time each task takes
	require('time-grunt')(grunt);

	var options = {
		// Project settings
		config: {
			// in this directory you can find your grunt config tasks
			src: "helpers/_grunt/*.js"
		},
		// define your path structure
		paths: {
			// resources folder with working files
			src: 'resources',
			// helpers folder with grunt tasks and styleguide templates, tests and photobox
			helper: 'helpers',
			// destination/distribution folder
			dist: '_output'
		},
		// define your ports for grunt-contrib-connect
		ports: {
			app: '9000',
			test: '9001',
			livereload: 35729
		}
	};

	// Load grunt configurations automatically
	var configs = require('load-grunt-configs')(grunt, options);

	// Define the configuration for all the tasks
	grunt.initConfig(configs);

	// Simple Tasks


	grunt.registerTask('watchCSS', [
		'sass:dist'
	]);
	grunt.registerTask('watchJS', [
		'sync:js'
	]);
	// Check your HTML
	grunt.registerTask('check-html', [
		'htmlhint'
	]);
	// Check you JS
	grunt.registerTask('check-js', [
		'jshint'
	]);
	// Beautify your JS and HTML
	grunt.registerTask('beauty-files', [
		'jsbeautifier'
	]);
	// Beautify your SASS files
	grunt.registerTask('beauty-scss', [
		'prettysass'
	]);

	// Advanced Tasks
	grunt.registerTask('server', [
		'newer:assemble',
		'concurrent:syncing',
		'watchCSS',
		'connect:livereload',
		//'browser_sync',
		'watch'
	]);

	grunt.registerTask('build', [
		'clean',
		'jsbeautifier:js',
		'concurrent:syncing',
		'watchCSS',
		'cmq',
		'autoprefixer',
		'cssmin',
		'bless',
		'concurrent:build',
		'jsbeautifier:html',
		'check-html'
	]);

	grunt.registerTask('default', [
		'server'
	]);

};
