var compress = require('compression');

module.exports = function(browserSync) {
    return {
        port: 3000,
        https: false,
        codeSync: false,
        open: false,
        online: false,
        reloadOnRestart: false,
        notify: false,
        watchEvents: [],
        logLevel: 'debug',
        logPrefix: 'EKOAVANTURA client log',
        logFileChanges: false,
        logSnippet: false,
        server: {
            baseDir: './dist/browser',
            middleware: [compress()]
        }
    }
};
