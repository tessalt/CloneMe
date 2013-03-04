/*global module:false*/
module.exports = function(grunt) {

grunt.initConfig({
  watch: {
    scripts: {
      files: ['**/*.scss'],
      tasks: ['sass'],
      options: {
        nospawn: true
      }
    }
  },
  sass: {                             
    dist: {                            
      files: {                        
        'styles/main.css': 'styles/main.scss'       
      }
    },
    dev: {                             
      options: {                      
        style: 'expanded'
      },
      files: {
        'styles/main.css': 'styles/main.scss'
      }
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-css');

grunt.registerTask('default', ['watch']);

};
