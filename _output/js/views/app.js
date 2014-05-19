define([
	'backbone',
	'views/slides',
	'collections/slides',
	'routers/router'
], function (Backbone, SlidesView, SlidesCollection, MainRouter) {
	var appView = Backbone.View.extend({
		el: 'body',

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
		}
	});
	return appView;
});