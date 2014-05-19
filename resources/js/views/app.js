define(['backbone', 'views/slides', 'collections/slides'], function (Backbone, SlidesView, SlidesCollection) {
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
		}
	});
	return appView;
});