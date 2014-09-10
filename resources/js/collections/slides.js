/**
 * Main Collection which collect all slide models
 */
define(['backbone', 'models/slide'], function(Backbone, SlideModel) {

    var Slides = Backbone.Collection.extend({
        model: SlideModel // Define our model
    });
    return Slides;
});
