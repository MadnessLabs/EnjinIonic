const jeditor = require('gulp-json-editor');


module.exports = function(gulp, callback) {
    return gulp.src('./extension/manifest.json')
        .pipe(jeditor(function(json) {
            json.name = configJSON.extension.name ? configJSON.extension.name : appName;
            json.description = appDesc;
            json.version = configJSON.extension.version;
            json.background = configJSON.extension.background;
            json.content_security_policy = configJSON.extension.content_security_policy;
            json.permissions = configJSON.extension.permissions;
            return json; 
        }))
        .pipe(gulp.dest("./extension"));
};