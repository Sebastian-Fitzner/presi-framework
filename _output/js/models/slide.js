/**
 * Main Model
 */
define(['backbone'], function (Backbone) {
	var Slide = Backbone.Model.extend({
		defaults: { // Define some types which can be used
			type: 'note',
			classes: '',
			title: '',
			subtitle: '',
			md: '',
			image: '',
			quote: '',
			code: '',
			codetype: '',
			text: ''
		},

		initialize: function () {
			this.setFontSize(); // Just to have the possibility to add classes to our title dependent on the length of the title
		},

		setFontSize: function () { // Set some classes
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