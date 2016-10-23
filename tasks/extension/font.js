const runSequence = require('run-sequence');


module.exports = function(gulp, callback) {
    return gulp.src(fontWatch)
        .pipe(gulp.dest('extension/fonts'));
};