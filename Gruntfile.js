module.exports = function(grunt) {
	
	grunt.initConfig({
		
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

		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'resources/images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'resources/images/'
				}]
			}
		},
		
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'resources/css/',
					src: ['**/*.css'],
					dest: 'resources/css/',
					ext: '.css'
				}]
			}
		},
		
		uglify: {
			my_target: {
				files: [{
					expand: true,
					cwd: 'resources/js',
					src: '**/*.js',
					dest: 'resources/js/'
				}]
			}
		},
		
		watch: {
			styles: {
				files: ['resources/less/**/*.less'],
				tasks: ['less', 'cssmin'],
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
	
	// Voir comment gérer uglify pour débuguer facilement le JS en dev et avoir un JS en prod minifié
	
	grunt.registerTask('default', ['less', 'cssmin', 'imagemin', 'watch']);
}