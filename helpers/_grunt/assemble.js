module.exports = {
    options: {
        assets: '<%= paths.dist %>',
        data: '<%= paths.src %>/data/**/*.{json,yml}',
        helpers: '<%= paths.src %>/templates/helpers/**/*.js',
        layoutdir: '<%= paths.src %>/templates/layouts/',
        partials: '<%= paths.src %>/templates/partials/**/*.hbs'
    },
    pages: {
        options: {
            layout: 'tpl_default.hbs'
         },
		files: [{
			cwd: '<%= paths.src %>/templates/pages/',
			dest: '<%= paths.dist %>/',
			expand: true,
			flatten: true,
			src: ['**/*.hbs']
		}]
    },
	ajax: {
        options: {
             layout: 'tpl_ajax.hbs',
			 flatten: true,
        },
        files: {
            '<%= paths.dist %>/ajax-content/': ['<%= paths.src %>/templates/ajax/*.hbs']
        }
    }
};