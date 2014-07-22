//configure requirejs
//baseUrl : Require loads all code relative to baseUrl
//below config file uses paths config fallback mechanism

requirejs.config({
//    baseUrl: 'libs',
    paths: {
        text : './libs/text',
        app: './app',
        jquery: [
            'http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min',
            './libs/jquery'
        ]
    }
});

define(function(require){
    var application = require('./app/main');
    application.initialize();
});