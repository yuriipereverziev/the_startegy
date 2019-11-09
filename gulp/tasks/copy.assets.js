'use strict';

module.exports = function() {
  $.gulp.task('copy:assets', function() {
    return $.gulp.src('./source/{fonts,images,video}/**', { since: $.gulp.lastRun('copy:assets') })
      .pipe($.gulp.dest($.config.root + '/assets'));
  });
};
