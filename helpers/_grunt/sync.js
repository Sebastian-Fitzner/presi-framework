module.exports = {
    js: {
        files: [
            // includes files within path and its sub-directories
            {
                cwd: '<%= paths.src %>/js',
                src: '**/*',
                dest: '<%= paths.dist %>/js'
            }
        ]
    },
    assets: {
        files: [
            // includes files within path and its sub-directories
            {
                cwd: '<%= paths.src %>/assets',
                src: '**/{,*/}*',
                dest: '<%= paths.dist %>'
            }
        ]
    },
    requirejs: {
        files: [
            // includes files within path and its sub-directories
            {
                cwd: '<%= paths.src %>/bower_components/requirejs',
                src: 'require.js',
                dest: '<%= paths.dist %>/bower_components/requirejs'
            }
        ]
			},
    backbone: {
        files: [
            // includes files within path and its sub-directories
            {
                cwd: '<%= paths.src %>/bower_components/backbone',
                src: 'backbone.js',
                dest: '<%= paths.dist %>/bower_components/backbone'
            }
        ]
    },
    underscore: {
        files: [
            // includes files within path and its sub-directories
            {
                cwd: '<%= paths.src %>/bower_components/underscore',
                src: 'underscore.js',
                dest: '<%= paths.dist %>/bower_components/underscore'
            }
        ]
    },
    jquery: {
        files: [
            // includes files within path and its sub-directories
            {
                cwd: '<%= paths.src %>/bower_components/jquery/dist',
                src: 'jquery.js',
                dest: '<%= paths.dist %>/bower_components/jquery/dist'
            }
        ]
    }
};