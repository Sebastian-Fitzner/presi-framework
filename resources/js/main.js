/**
 * User: Sebastian Fitzner
 * Date: 13.03.14
 * Time: 22:15
 */
require.config({
	paths: {
		jquery: '../bower_components/jquery/dist/jquery',
		backbone: '../bower_components/backbone/backbone'
	},
	shim: {
		'backbone': {
			deps: ['../bower_components/underscore/underscore', 'jquery'],
			exports: 'Backbone'
		}
	}
});
require(['app', 'jquery', 'backbone'], function (app, $, backbone) {
	'use strict';
	console.log(app);
	console.log('Running jQuery %s', $().jquery);
	console.log(backbone);
});
