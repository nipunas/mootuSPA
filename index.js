//configure requirejs
requirejs.config({
    baseUrl: 'libs',
    paths: {
        text : './text',
        app: '../app'
    }
});

//entry point
//requirejs(['app/main']);

define(function(require){
    var application = require('./app/main');
    application.initialize();
});

//(function($) {
//    var app = $.sammy('#holder', function() {
//        this.get('#/', function(context){
//            $('#app-content').empty();
//        });
//        
//        this.get('#/about', function(context){
//            $('#app-content').empty();
//            
//        $.get('./App/Module1/module.html', function(data){
//            $('#app-content').html(data);
//        });
//            
//        });
//    });
//
//    $(function() {
//      app.run('#/');
//    });
//
//})(jQuery);