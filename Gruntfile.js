
module.exports = function (grunt) {
  "use strict";

  // Config...
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodewebkit: {
      options: {
        build_dir: './dist', // Where the build version of my node-webkit app is saved
        mac: true,
        win: true,
        linux32: true,
        linux64: true
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
