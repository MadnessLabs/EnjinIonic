argv          = require('yargs').argv;
browserSync   = require('browser-sync').create();

const setVars = require('./services/setVars');


module.exports = function(){
    global.env = environment = argv.e ? argv.e : false;
    global.isWatching = false;
    global.synced     = false;
    global.isError    = false;
    Now = new Date();
    deployEnv = argv.e ? argv.e : 'app';
    deploy = {
        env: deployEnv,
        note: argv.n ? argv.n : Now.toLocaleDateString() + ' ' + Now.toLocaleTimeString(),
        branch: deployEnv == 'app' ? 'dev' : 'production'
    };
    setVars();
};