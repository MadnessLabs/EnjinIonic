const template = require('gulp-template');
const ts = require('gulp-typescript');
const gulpif = require('gulp-if');
const cache = require('gulp-cached');
const addsrc = require('gulp-add-src');


module.exports = function(gulp, callback) {
    var tsResult = gulp.src(tmplDir + 'ts/app.ts')
        .pipe(replace('@@{app}', appName))
        .pipe(replace('@@{plugins}', JSON.stringify(configJSON.extension.plugins).slice(1,-1).replace(/"/g, "'").replace(/,/g, ", \n\t\t")))
        .pipe(replace('../', '../../app/'))
        .pipe(gulpif(global.isWatching, plumber({
            errorHandler: function(error) {
                browserSync.notify(error.message, errorTimeout);
                this.emit('end');
            }
        })))
        .pipe(gulpif(global.isWatching,  cache('extension-js')))
        .pipe(addsrc('app/typings/index.d.ts'))
        .pipe(ts({
            "compilerOptions": {
                "target": "es5",
                "sourceMap": false
            }
        }));

        tsResult.dts.pipe(gulp.dest('app/extension/build'));
        tsResult.js.pipe(gulp.dest('app/extension/build')).on('end', function() {
            callback();
        });
};