'use strict';

module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src('./source/sass/style.scss')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass()).on('error', $.gp.notify.onError({title: 'Style'}))
            .pipe($.gp.autoprefixer({overrideBrowserslist: $.config.autoprefixerConfig}))
            // .pipe($.cssunit({
            //     type: 'px-to-rem',
            //     rootSize: 16
            //     }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.csso())
            .pipe($.gp.rename('style.min.css'))
            .pipe($.gulp.dest($.config.root + '/assets/css'))
            .pipe($.browserSync.stream());
    })
};
