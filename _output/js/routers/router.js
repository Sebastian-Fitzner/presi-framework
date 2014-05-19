/**
 * Created by Sebastian on 19.05.14.
 */
define(['backbone'], function(Backbone){

	var Router = Backbone.Router.extend({
		routes: {
			'': 'home',
			'slides/:id': 'showSlide'
		},
		
		home: function () {
			App.Vent.trigger('init');
		},

		showSlide: function (slideIndex) {
			App.Vent.trigger('changeSlide', {
				slideIndex: slideIndex,
				direction: 'next'
			});
		}
	});

	return Router;
});
