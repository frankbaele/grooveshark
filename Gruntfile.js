
module.exports = function (grunt) {
  "use strict";

  // Config...
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodewebkit: {
      options: {
        build_dir: './dist', // Where the build version of my node-webkit app is saved
        mac: true, // We want to build it for mac
        win: false, // We want to build it for win
        linux32: false, // We don't need linux32
        linux64: false // We don't need linux64
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
