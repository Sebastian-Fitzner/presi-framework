/**
 * This is our application script which creates the main parts of our presentation framework
 */
define([
    'backbone',
    'views/slides',
    'collections/slides',
    'routers/router'
], function(Backbone, SlidesView, SlidesCollection, MainRouter) {
    var appView = Backbone.View.extend({
        el: 'body', // Define root element for this view
        events: {
            'keyup': 'keyUp' // On keyup event execute the method function "keyUp"
        },

        // Standard initialize function to init app view
        initialize: function() {
            // Save this in that because of context
            var that = this;
            var collection = new SlidesCollection(); // Define a new collection which we declare as parameter in our function

            collection.fetch({ // fetch funtion
                url: 'data/slides/assemble-workshop.json', // Define the models file
                complete: function() { // On complete ...
                    that.initApp(collection); // ... start @initApp()
                }
            });
        },

        initApp: function(collection) {
            new SlidesView({
                collection: collection // Create a new collection view with the collection we get from @initialize()
            });

            App.Router = new MainRouter(); // Create a new router instance
            Backbone.history.start(); // Start our routing
        },

        keyUp: function(e) { // see events
            // 37 = left
            // 39 = right
            if (e.keyCode === 37 || e.keyCode === 39) {
                App.Vent.trigger('changeSlide', { // Because we defined in main.js App.Vent we can now use Backbone.Events and trigger changeSlide()
                    direction: e.keyCode === 37 ? 'prev' : 'next' // We also delivered the direction for changeSlide() so that we can define if we go forwards or backwards
                })
            }
            if (e.keyCode === 27) {
                App.Vent.trigger('zoomOut') // TODO
            }
        }
    });
    return appView; // return the constructor function
});
