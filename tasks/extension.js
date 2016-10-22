const runSequence = require('run-sequence');


module.exports = function(gulp, callback) {
    runSequence('extension:build', 'extension:watch', callback);
};