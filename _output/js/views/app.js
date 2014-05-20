define([
	'backbone',
	'views/slides',
	'collections/slides',
	'routers/router'
], function (Backbone, SlidesView, SlidesCollection, MainRouter) {
	var appView = Backbone.View.extend({
		el: 'body',
		events: {
			'keyup': 'keyUp'
		},

		initialize: function () {

			var testcollection = [
				{title: "my title"},
				{title: "my title 2"}
			];

			new SlidesView({
				collection: new SlidesCollection(testcollection)
			});

			App.Router = new MainRouter();
			Backbone.history.start();
		},

		keyUp: function (e) {
			// 37 = left
			// 39 = right
			if(e.keyCode === 37 || e.keyCode === 39){
				App.Vent.trigger('changeSlide', {
					direction: e.keyCode === 37 ? 'prev' : 'next'
				})
			}
		}
	});
	return appView;
});