const watch = require('gulp-watch');
const runSequence = require('run-sequence');


module.exports = function(gulp, callback) {
    global.isWatching = true;
    watch(configFile, function() {
        runSequence('config:build');
    });
    watch(cssWatch, function(){
        runSequence('css:build');
    });
    watch(jsWatch, function(){ 
        runSequence('js:lint');
    });
    watch(jsLib, function(){
        runSequence('js:libraries')
    });
    watch(htmlWatch, function() {
        runSequence('html:compile');
    });
    watch(htmlTemplate, function() {
        runSequence('html:template');
    });
    watch(imgWatch, function(){
        runSequence('img:icon');
    });
};