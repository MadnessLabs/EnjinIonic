const template = require('gulp-template');
const runSequence = require('run-sequence');
const jeditor = require('gulp-json-editor');
const fs = require('fs')


module.exports = function(gulp, callback) {
    configJSON.extension = JSON.parse(fs.readFileSync(tmplDir + 'extension/extension.json'));
    configJSON.extension.routes = configJSON.routes;
    gulp.src(configFile)
        .pipe(jeditor(configJSON))
        .pipe(gulp.dest('./'));
    gulp.src([tmplDir + 'extension/extension.pug', tmplDir + 'extension/extension.scss', tmplDir + 'extension/manifest.json'])
        .pipe(gulp.dest('./app/extension'));
    gulp.src(tmplDir + 'extension/backgroundService.ts')
        .pipe(template({
            app: appName
        }))
        .pipe(gulp.dest('./app/extension')).on('end', function() {
            runSequence('extension', callback);
        });
};