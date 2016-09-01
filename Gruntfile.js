module.exports = function(grunt) {

    grunt.initConfig({
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'index.html': 'source.html',     // 'destination': 'source'
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/style.min.css': ['css/*.css']
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            target: {
                files: {
                    'dist/script.min.js': ['js/*.js']
                }
            }
        },
        watch: {
            options: {
                // Start a live reload server on the default port 35729
                livereload: true,
            },
            htmls: {
                files: ['source.html'],
                tasks: ['htmlmin'],
            },
            styles: {
                files: ['css/*.css'],
                tasks: ['cssmin'],
            },
            scripts: {
                files: ['js/*.js'],
                tasks: ['uglify'],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['htmlmin', 'cssmin', 'uglify', 'watch']);

};