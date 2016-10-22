const watch = require('gulp-watch');
const runSequence = require('run-sequence');


module.exports = function(gulp, callback) {
    global.isWatching = true;
    watch('app/extension/src/**/*.scss', function() {
        runSequence('extension:css');
    });
    watch('app/extension/src/**/*.ts', function() {
        runSequence('extension:js', 'extension:build');
    });
    watch('app/extension/src/**/*.jade', function() {
        runSequence('extension:html');
    });
    watch(configFile, function() {
        runSequence('extension:build');
    });
    watch(appIcon, function() {
        runSequence('img:icon');
    });
};