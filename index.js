//configure requirejs
requirejs.config({
    baseUrl: 'libs',
    paths: {
        text : './text',
        app: '../app'
    }
});

//debugger;
//entry point
requirejs(['app/main']);

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