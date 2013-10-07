
module.exports = function (grunt) {
  "use strict";

  // Config...
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodewebkit: {
      options: {
        build_dir: './dist', // Where the build version of my node-webkit app is saved
        mac: true,
        win: false,
        linux32: false,
        linux64: false
      },
      src: ['./src/**/*'] // Your node-wekit app
    }
  });


  // Load tasks...
  grunt.loadNpmTasks('grunt-node-webkit-builder');

  grunt.registerTask('build', [
    'nodewebkit'
  ]);

};
