module.exports = function(grunt) {
    // Do grunt-related things in here

    grunt.loadNpmTasks('grunt-wiredep');

      grunt.initConfig({
        wiredep: {
          target: {
            src: '*.html' // point to your HTML file.
          }
        }
      });
};
