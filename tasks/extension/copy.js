const copyFile = require('../../services/copyFile');


module.exports = function(gulp, callback) {
    for(var i = 0; i < configJSON.routes.length; i++) {
        var route = configJSON.routes[i];
        var templateParts = route.templateUrl.split();
        var pageName = templateParts[templateParts.length - 1].split('.');
        var viewPath = route.templateUrl;
        var controllerPath = 'build/js/page/' + pageName[0] + '.js';
        copyFile(viewPath, 'extension/html/page', function(){
            copyFile(controllerPath, 'extension/build/js/page', function() {
                callback();
            });
        });
    }
};