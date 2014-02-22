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
          tasks: ['build'],
        }
      },

      browserify: {
        dist: {
          src: ['src/game.js'],
          dest: 'dist/app.js'
        }
      },

      connect: {
        server: {
          options: {
            port: 8000,
            hostname: '0.0.0.0',
            open: true,
            base: 'dist',
            directory: 'dist'
          }
        }
      },

      concurrent: {
        server: ['connect:server', 'watch:src']
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
        }
      },

      clean: {
        dist: ['dist/*']
      }
    });

    grunt.registerTask('build', [
      'clean:dist',
      'browserify:dist',
      'copy:dist'
    ]);

    grunt.registerTask('default', [
      'build',
      'concurrent:server'
    ]);
};
