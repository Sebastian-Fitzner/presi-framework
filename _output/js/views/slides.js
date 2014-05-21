define(['backbone', 'views/slide'], function (Backbone, SlideView) {

	var SlidesView = Backbone.View.extend({
		el: '.slides',

		initialize: function () {
			this.currentSlideIndex = 1;
			this.slideLength = this.collection.length;
			this.renderAll();

			App.Vent.on('init', this.hideSlidesButFirst, this);
			App.Vent.on('changeSlide', this.changeSlide, this);
		},

		hideSlidesButFirst: function () {
			this.$el.children(':nth-child(n+2)').hide();
		},

		changeSlide: function (opts) {
			var that = this;
			var slides = this.$el.children();
			var newSlide;

			this.setCurrentSlideIndex(opts);

			newSlide = this.setNewSlide(slides);

			this.animateToNewSlide(slides, newSlide, opts.direction);

		},

		setCurrentSlideIndex: function (opts) {
			// When we are change the URL go to the specific index
			if (opts.slideIndex) {
				return this.currentSlideIndex = ~~opts.slideIndex;
			}

			this.currentSlideIndex += opts.direction === 'next' ? 1 : -1;

			if (this.currentSlideIndex > this.slideLength) {
				this.currentSlideIndex = 1;
			}

			if (this.currentSlideIndex <= 0) {
				this.currentSlideIndex = this.slideLength;

			}
		},

		setNewSlide: function (slides) {
			return slides.eq(this.currentSlideIndex - 1)
		},

		animateToNewSlide: function (slides, newSlide, direction) {
			slides.filter(':visible')
				.css('position', 'absolute')
				.animate({
					'top': direction === 'next' ? '100%' : '-100%',
					'opacity': 'hide'
				}, 400,
				function () {
					$(this).css('top', '0');
					newSlide
						.css('top', direction === 'next' ? '-100%' : '100%')
						.animate({
							'top': '0',
							'opacity': 'show'
						}, 400
					);
				});
		},

		renderAll: function () {
			this.$el.empty();

			this.collection.each(this.render, this);
		},

		render: function (slide) {
			var slideView = new SlideView({model: slide });
			this.$el.append(slideView.render().el);
			return this;
		}
	});

	return SlidesView;

});