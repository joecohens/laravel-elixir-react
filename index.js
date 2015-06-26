var gulp = require('gulp'),
    react = require('gulp-react'),
    gulpIf = require('gulp-if'),
    uglify = require('gulp-uglify'),
    _ = require('underscore'),
    elixir = require('laravel-elixir'),
    utilities = require('laravel-elixir/ingredients/commands/Utilities'),
    notification = require('laravel-elixir/ingredients/commands/Notification');

elixir.extend('react', function (src, options) {
    var config = this;
    var filePattern = '/**/*.+(js|jsx)';

    options = _.extend({
        debug:  ! config.production,
        srcDir: config.assetsDir + 'js',
        output: config.jsOutput
    }, options);

    src = "./" + utilities.buildGulpSrc(src, options.srcDir, filePattern);

    gulp.task('react', function () {
        var onError = function(e) {
            new notification().error(e, 'React Compilation Failed!');
            this.emit('end');
        };

        return gulp.src(src)
            .pipe(react(options)).on('error', onError)
            .pipe(gulpIf(! options.debug, uglify()))
            .pipe(gulp.dest(options.output))
            .pipe(new notification().message('React Compiled!'));
    });

    this.registerWatcher('react', options.srcDir + filePattern);

    return this.queueTask('react');
});
