define(['backbone'], function (Backbone) {
	var Slide = Backbone.Model.extend({
		defaults: {
			type: 'note',
			title: '',
			subtitle: '',
			md: '',
			image: '',
			quote: '',
			code: '',
			text: ''
		},

		initialize: function () {
			this.setFontSize();
		},

		setFontSize: function () {
			var size,
				fontLength = this.get('title').length;

			if (fontLength >= 100){
				size = "large";
			} else if (fontLength >= 200){
				size = "x-large";
			} else {
				size = "normal"
			}
			this.set('size', size);
		}
	});

	return Slide;
});