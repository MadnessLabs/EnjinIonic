const runSequence = require('run-sequence');


module.exports = function(gulp, callback) {
    runSequence(
        'vars',
        'extension:font',
        'extension:router',
        'extension:angular',
        'extension:config',
        'extension:popup',
        'extension:background',
        'extension:js',
        'extension:css',
        'extension:html',
        callback
    );
};