'use strict';

module.exports = function() {
	$.gulp.task("imagemin", function () {
	  return $.gulp.src("source/images/**/*.{png,jpg,svg}")
	    .pipe($.gp.imagemin([
	      $.gp.imagemin.optipng({optimizationLevel: 3}),
	      $.gp.imagemin.jpegtran({progressive: true}),
	      $.gp.imagemin.svgo()
	    ]))
	    .pipe($.gulp.dest($.config.root + '/assets/images'));
	});
};