/**
 * Configure our RequireJS and initialize our application
 */
require.config({
	paths: {
		jquery: '../bower_components/jquery/dist/jquery',
		marked: '../bower_components/marked/lib/marked',
		underscore: '../bower_components/underscore/underscore',
		backbone: '../bower_components/backbone/backbone'
	},
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'underscore': {
			deps: ['marked'],
			exports: '_'
		},
		'marked': {
			exports: 'marked'
		}
	}
});

define(['views/app'], function(AppView){
	window.App = {
		Vent: _.extend({}, Backbone.Events) // We use the underscore lib to clone Backbone.Events into the Vent object without referencing it
	};
	new AppView(); // Init app view
});