/**
 * Main View for our single model
 */
define(['backbone', 'marked'], function(Backbone, marked) {

    var Slide = Backbone.View.extend({
        tagName: 'div', // Here you see how to change the tag of the view
        className: 'slide', // Set the class for the view
        template: _.template($('#slideTemplate').html()), // We use a template for rendering which you can find in index.hbs - USE TEMPLATES

        initialize: function() { // TODO
            var that = this;
            // $(window).on('resize', this.centerSlide);
        },

        render: function() { // Here we have our essential render function
            this.renderTemplate(); // Renders our template
            this.getContentType(); // Get the content type and execute the another render function which is responsible for the type
            this.centerSlide(); // Center the slides
            return this; // We have to, you know it already
        },

        renderTemplate: function() {
            var innerEl = this.$el;
            innerEl.html(this.template(this.model.toJSON())); // We replace the content of $el with our model in JSON format
        },

        centerSlide: function() { // Just a little bit for our eyes
            var that = this,
                el = that.$el,
                slide = el.find('.slide-content'),
                slideHeight,
                windowHeight;

            var timeout = setTimeout(function() {
                windowHeight = $(window).height();
                slideHeight = el.find('.slide-content').outerHeight();
                var calc = (windowHeight - slideHeight) / 2;

                slide.css({
                    'margin-top': calc < 0 ? '0px' : calc
                })

            }, 1000);
        },

        getContentType: function() { // Get the content type and execute a specific render function
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

        renderText: function() { // render normal text we have in our JSON
            this.$el.addClass('text'); // add a specific class for this type
            this.renderTemplate(); // Execute our defined template function
        },

        renderMarkdown: function() { // render our markdown files
            var that = this,
                md = this.model.get('md');

            if ($.isPlainObject(md)) { // If we have an object with multiple markdown files in our JSON we just execute an each function
                return _.each(md, function(mdPath) {
                    that.getMarkdown(mdPath); // Execute getMarkdown()
                })
            } else {
                that.getMarkdown(md);
            }

        },

        getMarkdown: function(mdPath) { // render markdown path we have in our JSON
            this.$el.addClass('markdown'); // add a specific class for this type
            this.renderTemplate(); // You get it? Just the same like in the other types
            setTimeout(function() {
                $('pre code').each(function(i, e) { // Init highlight.js
                    hljs.highlightBlock(e)
                });
            }, 200);
        },

        renderImage: function() {
            this.$el.addClass('image');
            this.renderTemplate();
        },

        renderQuote: function() {
            this.$el.addClass('quote');
            this.renderTemplate();
        },

        renderCode: function() {
            var that = this,
                code = this.model.get('code');

            if ($.isPlainObject(code)) {
                return _.each(code, function(codePath) {
                    that.getCode(codePath);
                })
            }
            that.getCode(code);
        },

        getCode: function(codePath) {
            var that = this;
            that.$el.html(that.template(that.model.toJSON()));

            setTimeout(function() {
                $('pre code').each(function(i, e) { // Init highlight.js
                    hljs.highlightBlock(e)
                });
            }, 200);
        }

    });

    return Slide;

});
