module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			sass: {
				files: ['src/scss/main.scss'],
				tasks: ['sass']
			},
			html: {
				files: ['src/*.html'],
				tasks: ['copy:main']
			},
			images: {
				files: ['src/img/*.jpg','src/img/*.png'],
				tasks: ['copy:img']
			}
		},

		sass: {
			 dist: {
			 	options: {
					style: 'expanded'
				},
			 	files: {
			 		'app/css/main.css' : 'src/scss/main.scss'
			 	}
			 }
		  },
			copy: {

			  main: {
			    expand: true,
			    cwd: 'src/',
			    src: '**/*.html',
			    dest: 'app/',
			  },
			  css: {
			    expand: true,
			    cwd: 'src/scss',
			    src: '*.css',
			    dest: 'app/css',
			  },

			  img: {
			    expand: true,
			    cwd: 'src/img/',
			    src: ['**'], 
			    dest: 'app/img/',
			  },

			  font: {
			  	expand: true,
			    cwd: 'bower_components/bootstrap-sass/assets/fonts/bootstrap/',
			    src: '**',
			    dest: 'app/fonts/',
			  }

			},
		concat: {
			options: {
				seperators: ';',
			},
			dist: {
				src: ['src/js/*.js'],
				dest: 'app/js/build.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['sass:dist', 'copy', 'concat']);
};