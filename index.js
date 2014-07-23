//configure requirejs
//baseUrl : Require loads all code relative to baseUrl
//below config file uses paths config fallback mechanism

requirejs.config({
//    baseUrl: 'libs',
    paths: {
        text : './libs/text',
        app: './app'
    }
});

//Entry point
define(function(require){
    var application = require('./app/main');
    application.initialize();
});