module.exports = function(grunt) {

   
    grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),

      compass: {
        dist: {
          options: {

            noLineComments: true,
            outputStyle: 'expanded',
            sassDir: 'sass',
            cssDir: 'css',
            environment: 'production'
          }
        }
      },

      sass: {                              // Task
        dist: {                            // Target
          options: {           
            sourcemap: 'none',             
            style: 'expanded'
          },
          files: {                         // Dictionary of files
            'project1/css/style.css': 'sass/style.scss',       // 'destination': 'source'
            //'widgets.css': 'widgets.scss'
          }
        }
      },
     
      watch: {

        options: {
            livereload: true
        },

        css: {
          files: ['**/*.scss'],
          tasks: ['sass'],
          options: {
            livereload: true,
            spawn: false
            
          },
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  //grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');
  grunt.registerTask('default',['newer:sass', 'watch']);

}