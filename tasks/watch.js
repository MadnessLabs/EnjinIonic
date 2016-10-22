const watch = require('gulp-watch');
const runSequence = require('run-sequence');


module.exports = function(gulp, callback) {
    global.isWatching = true;
    gulp.watch(configFile, function(callback) {
        runSequence('config:build', callback);
    });
    gulp.watch(cssWatch, function(callback){
        runSequence('css:build', callback);
    });
    gulp.watch(jsWatch, function(callback){ 
        runSequence('js:lint', callback);
    });
    gulp.watch(jsLib, function(callback){
        runSequence('js:libraries', callback)
    });
    gulp.watch(htmlWatch, function(callback) {
        runSequence('html:compile', callback);
    });
    gulp.watch(htmlTemplate, function(callback) {
        runSequence('html:template', callback);
    });
    gulp.watch(imgWatch, function(callback){
        runSequence('img:icon');
    });
};