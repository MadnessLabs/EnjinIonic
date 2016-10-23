const runSequence = require('run-sequence');


module.exports = function(gulp, callback) {
    runSequence(
        'vars',
        'js:compile',
        'html:compile',
        'extension:copy',
        'extension:font',
        'extension:router',
        'extension:angular',
        'extension:config',
        'extension:js',
        'extension:popup',
        'extension:background',
        'extension:css',
        'extension:html',
        callback
    );
};