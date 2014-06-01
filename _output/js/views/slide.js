define(['backbone', 'marked'], function (Backbone, marked) {

	var Slide = Backbone.View.extend({
		tagName: 'div',
		className: 'slide',
		template: _.template($('#slideTemplate').html()),


		// We need some templates to make the whole thing better
		render: function () {
			this.renderTemplate();
			this.getContentType();
			this.centerSlide();
			return this;
		},

		renderTemplate: function () {
			var innerEl = this.$el;
			innerEl.html(this.template(this.model.toJSON()));
		},

		centerSlide: function () {
			var that = this,
				el = that.$el,
				slide = el.find('.slide-content'),
				slideHeight,
				windowHeight;

			var timeout = setTimeout(function () {
				windowHeight = $(window).height();
				slideHeight = el.find('.slide-content').outerHeight();
				var calc = (windowHeight-slideHeight)/2;

				slide.css({
					'margin-top': calc < 0 ? '0px' : calc
				})

			}, 1000);
		},

		getContentType: function () {
			if (this.model.get('text')) {
				this.renderText();
			}
			if (this.model.get('md')) {
				this.renderMarkdown();
			}
			if (this.model.get('image')) {
				this.renderImage();
			}
			if (this.model.get('quote')) {
				this.renderQuote();
			}
			if (this.model.get('code')) {
				this.renderCode();
			}
		},

		renderText: function () {
			this.$el.addClass('text');
			this.renderTemplate();
		},

		renderMarkdown: function () {
			var that = this,
				md = this.model.get('md');

			if ($.isPlainObject(md)) {
				return _.each(md, function (mdPath) {
					that.getMarkdown(mdPath);
				})
			} else {
				that.getMarkdown(md);
			}

		},

		getMarkdown: function (mdPath) {
			var that = this;
			that.$el.html(that.template(that.model.toJSON()));
		},

		renderImage: function () {
			this.$el.addClass('image');
			this.renderTemplate();
		},

		renderQuote: function () {
			this.$el.addClass('quote');
			this.renderTemplate();
		},

		renderCode: function () {
			var that = this,
				code = this.model.get('code');

			if ($.isPlainObject(code)) {
				return _.each(code, function (codePath) {
					that.getCode(codePath);
				})
			}
			that.getCode(code);
		},

		getCode: function (codePath) {
			var that = this;

			that.$el.html(that.template(that.model.toJSON()));

			$(document).ready(function () {
				$('pre code').each(function (i, e) {
					hljs.highlightBlock(e)
				});
			});
		}

	});

	return Slide;

});