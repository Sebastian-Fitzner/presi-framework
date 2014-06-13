/**
 * Main view for our collection
 */
define(['backbone', 'views/slide'], function (Backbone, SlideView) {

	var SlidesView = Backbone.View.extend({ // Create a new backbone view
		el: '.slides', // Define the class for our element

		initialize: function () {
			// define some vars
			this.currentSlideIndex = 1;
			this.lastSlide = 1;
			this.slideLength = this.collection.length;

			// We need to call the render function which is essential for a view
			this.renderAll();

			// These are our listeners for events we fired and execute a function
			App.Vent.on('init', this.getFirstSlide, this);
			App.Vent.on('changeSlide', this.changeSlide, this);
			App.Vent.on('zoomOut', this.zoomOut, this);
		},

		getFirstSlide: function () {
			// Just add on the first element of the models in our collection some classes
			this.$el.children().eq(0).addClass('current slide-rotateCubeTopIn');
			// And navigate to slide 1
			App.Router.navigate('slides/1');
		},

		// changeSlide() is our main function to navigate
		changeSlide: function (opts) {
			var that = this;
			var slides = this.$el.children();
			var newSlide;

			// Update our current slide index
			this.setCurrentSlideIndex(opts);

			// Set the new slide which we can use in other functions
			newSlide = this.setNewSlide(slides);

			// Animate to the new slide and deliver some parameters
			this.animateToNewSlide(slides, newSlide, opts.direction);

			// Start the router and go to slide on change (we get the right slide because of setCurrentSlideIndex()
			App.Router.navigate('slides/' + this.currentSlideIndex);

		},

		setCurrentSlideIndex: function (opts) { // When we are changing the URL go to the specific index
			// if slideIndex has a value in opts
			if (opts.slideIndex) {
				// set the current slide index to the value we get from opts
				return this.currentSlideIndex = ~~opts.slideIndex; // ~~ is a shortcut for Number()
			}

			// Set the var lastSlide with getting the old value out of currentSlideIndex
			this.lastSlide = this.currentSlideIndex;
			// And update currentSlideIndex with values we get from opts
			this.currentSlideIndex += opts.direction === 'next' ? 1 : -1;

			// If currentSlideIndex is greater than slide length go back to first slide
			if (this.currentSlideIndex > this.slideLength) {
				this.currentSlideIndex = 1;
			}

			// If currentSlideIndex is smaller than 0 go to last slide
			if (this.currentSlideIndex <= 0) {
				this.currentSlideIndex = this.slideLength;

			}
		},

		setNewSlide: function (slides) { // Just setting the current slide
			return slides.eq(this.currentSlideIndex - 1);
		},

		animateToNewSlide: function (slides, newSlide, direction) { // Here the magic animation is happen
			// First we remove all classes from all slides
			slides.removeClass('slide-rotateCubeTopIn slide-rotateCubeBottomIn slide-rotateCubeTopOut slide-rotateCubeBottomOut current');

			// If dir is next
			if(direction === 'next') {
				// Add classes to the last and current slide
				slides.eq(this.lastSlide - 1).addClass('current slide-rotateCubeTopOut');
				slides.eq(this.currentSlideIndex - 1).addClass('current slide-rotateCubeTopIn');
			} else { // else
				// Add classes to the last and current slide
				slides.eq(this.lastSlide - 1).addClass('current slide-rotateCubeBottomOut');
				slides.eq(this.currentSlideIndex - 1).addClass('current slide-rotateCubeBottomIn');
			}
		},

		// TODO
		zoomOut: function () {
			var slides = this.$el.children();
		},

		renderAll: function () { // renderAll() cleans up the $el
			this.$el.empty();

			// Each element in collection we start render()
			this.collection.each(this.render, this);
		},

		render: function (slide) { // This function is essential and have to return "this"
			var slideView = new SlideView({model: slide }); // Create a new view for our model
			this.$el.append(slideView.render().el); // Append the new view to $el (.slides)
			return this;
		}
	});

	// Return our constructor
	return SlidesView;

});