/**
 * Main Router for our application
 */
define(['backbone'], function(Backbone) {

    var Router = Backbone.Router.extend({
        routes: { // Define some routes
            '': 'home', // Key-value-pairs: key is the URL you type in your browser; Value is our function we execute
            'slides/:id': 'showSlide' // :id is a wildcard
        },

        home: function() {
            App.Vent.trigger('init'); // If the URL is our Domain name without any route we trigger init
        },

        showSlide: function(slideIndex) { // If our URL contains slides/:id we trigger changeSlide() and we surrender the index (value for wildcard)
            App.Vent.trigger('changeSlide', {
                slideIndex: slideIndex, // Set the option slideIndex
                direction: 'next' // Define the direction to get a cool animation
            });
        }
    });

    return Router;
});
