// Generated on 2014-02-21 using generator-webapp 0.4.7
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
        src: {
          files: ['src'],
          tasks: ['build']
        }
      },

      browserify: {
        dist: {
          src: ['src/game.js'],
          dest: 'dist/app.js'
        }
      },

      connect: {
        options: {
          port: 9000,
          livereload: 35729,
          // Change this to '0.0.0.0' to access the server from outside
          hostname: 'localhost'
        },
        dist: {
          options: {
            open: true,
            base: 'dist'
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
      },

      clean: {
        dist: ['dist/*']
      },

      concurrent: {
        server: [
          'copy:styles'
        ],
      }
    });

    grunt.registerTask('build', [
      'clean:dist',
      'browserify:dist',
      'copy:dist'
    ]);

    grunt.registerTask('server', [
      'build',
      'concurrent:server',
      'connect:dist',
      'watch'
    ]);

    grunt.registerTask('default', [
      'server'
    ]);
};
