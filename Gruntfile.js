'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({
      watch: {
        dev: {
          files: ['*.js'],
          tasks: ['shell:dev']
        }
      },

      shell: {
        dev: {
          options: {
            stdout: true
          },
          command: './make_debug.sh'
        },

        dist: {
          command: './make.sh'
        }
      },

      connect: {
        options: {
          port: 9000,
          livereload: 35729,
          // Change this to '0.0.0.0' to access the server from outside
          hostname: 'localhost'
        },
        dev: {
          options: {
            open: 'wlw.canvas.debug.html'
          }
        }
      },

      copy: {
        dist: {
          files: [{
            expand: true,
            cwd: 'src',
            dest: 'dist',
            src: [
              '*.html'
            ]
          }]
        },

        styles: {
          expand: true,
          dot: true,
          cwd: 'src/styles',
          dest: 'dist/styles/',
          src: '{,*/}*.css'
        }
      }
    });

    grunt.registerTask('build', [
      'shell:dist'
    ]);

    grunt.registerTask('server', [
      'shell:dev',
      'connect:dev',
      'watch:dev'
    ]);

    grunt.registerTask('default', [
      'server'
    ]);
};
