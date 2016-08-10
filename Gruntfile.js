module.exports = function(grunt) {
  grunt.initConfig({
    base_path : '',
    build : 'library',
    css_build : '<%= build %>/css',
    //js_build : '<%= build %>/js',
    //img_build : '<%= build %>/images',

    less : {
      compile : {
        options : {
          paths : [ '<%= css_build %>' ],
          compress : true,
          optimization : 2,
        },
        files : [ {
          expand : true,
          cwd : '<%= build %>/less/styles',
          src : [ 'style.less'],
          dest : '<%= css_build %>/',
          ext : '.css'
        } ],
      }
    },


    watch : {
      dist : {
        files : [ 'library/less/**/*' ],
        tasks : [ 'less' ]
      },
      options: {
        interval: 10,
      }
    },

 }); /* end of init config */

  /* Load all plugins - loadNpmTasks */
  require('jit-grunt')(grunt);
  
  //require('time-grunt')(grunt);

  grunt.registerTask('w', [ 'watch' ]);
  //grunt.registerTask('newer', [ 'newer' ]);
}