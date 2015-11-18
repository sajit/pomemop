/**
 * Created by sajit on 11/17/15.
 */

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    '../compiled/base.css' : 'sass/base.scss'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        },
        kss: {
            options: {
                includeType: 'css',
                includePath: '../compiled/base.css',
            },
            dist: {
                files: {
                    '../docs/': ['../docs/']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-kss');
    //grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('dosass',['sass']);
    grunt.registerTask('styleguide', ['kss']);
    grunt.registerTask('default',['sass','kss']);
};