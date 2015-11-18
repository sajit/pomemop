/**
 * Created by sajit on 11/17/15.
 */

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        mavenPrepare: {
            options: {
                resources: ['sass/**','Gruntfile.js','package.json']
            }
        },
        sass: {
            dist: {
                files: {
                    '../compiled/base.css' : 'sass/base.scss'
                }
            }
        },
        gruntMavenProperties: grunt.file.readJSON('grunt-maven.json'),

        watch: {
            maven: {
                files: ['<%= gruntMavenProperties.filesToWatch %>'],
                tasks: 'default'
            }
        },
        //watch: {
        //    css: {
        //        files: '**/*.scss',
        //        tasks: ['sass']
        //    }
        //},
        kss: {
            options: {
                includeType: 'css',
                includePath: '../compiled/base.css',
            },
            dist: {
                files: {
                    '../compiled/': ['../compiled/']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-kss');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-maven');
    grunt.registerTask('css',['sass']);
    grunt.registerTask('styleguide', ['kss']);
    grunt.registerTask('default',['mavenPrepare','sass','kss']);
};