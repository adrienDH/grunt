module.exports = function(grunt) {
	
	grunt.initConfig({
		
		// Compilation des fichier less en css
		less: {
			src: {
				expand: true,
				cwd: 'resources/less/',
				src: [
					'**/*.less'
				],
				ext: '.css',
				dest: 'resources/css/'
			}
		},

		// Minification des images
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'resources/images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'resources/images/min/'
				}]
			}
		},
		
		// Minification des css
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'resources/css/',
					src: ['**/*.css'],
					dest: 'resources/css/min',
					ext: '.css'
				}]
			}
		},
		
		// Minification des js
		uglify: {
			my_target: {
				files: [{
					expand: true,
					cwd: 'resources/js',
					src: '**/*.js',
					dest: 'resources/js/min'
				}]
			}
		},
		
		
		watch: {
			styles: {
				files: ['resources/less/**/*.less'],
				tasks: ['less'],
				options: {
					nospawn: true
				}
			}
		}
	
	});
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['less', 'cssmin', 'uglify', 'imagemin', 'watch']);
}