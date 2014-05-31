define(['backbone'], function (Backbone) {

	var Slide = Backbone.View.extend({
		tagName: 'div',
		className: 'slide',


		// We need some templates to make the whole thing better
		render: function () {
			var innerEl = this.$el;
			innerEl.append('<section class="slide-content"><h1 class="' + this.model.get('size') + '">' + this.model.get('title') + '</h1><h2>' + this.model.get('subtitle') + '</h2></section>');
			this.getContentType();
			return this;
		},

		getContentType: function () {
			if (this.model.get('text')) {
				this.renderText();
			}
			if (this.model.get('markdown')) {
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
			this.$el.addClass('text')
				.append(
					'<section class="slide-content text-inner"><p>' + this.model.get('text') + '</p></section>'
				);
		},

		renderMarkdown: function () {
			var that = this,
				markdown = this.model.get('markdown');

			if ($.isPlainObject(markdown)) {
				return _.each(markdown, function (markdownPath) {
					that.getMarkdown(markdownPath);
				})
			} else {
				this.getMarkdown(markdown);
			}

		},

		getMarkdown: function (markdownPath) {
			var that = this;

			$.get(markdownPath, function (customMarkdown) {
				that.$el
					.append('<section class="slide-content text-inner">' + markdown.toHTML(customMarkdown) + '</section>');
			});
		},

		renderImage: function () {
			this.$el.addClass('image')
				.append(
					'<section class="slide-content"><img src="' + this.model.get('image') + '" /></section>'
				);
		},

		renderQuote: function () {
			this.$el.addClass('quote')
				.append(
					'<section class="slide-content"><blockquote>' + this.model.get('quote') + '</blockquote></section>'
				);
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

			$.get(codePath, function (code) {
				that.$el
					.append('<section class="slide-content"><pre><code>' + _.escape(code) + '</code></pre></section>');

				$(document).ready(function () {
					$('pre code').each(function (i, e) {
						hljs.highlightBlock(e)
					});
				});
			});
		}

	});

	return Slide;

});