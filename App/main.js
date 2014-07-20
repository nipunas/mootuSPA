define(function(require){
//    var module1 = require('./Module1/module');
//    $('#app-content').append(module1.loadHtml());
    
    return{
        initialize: function(){
 
        var app = $.sammy('#holder', function() {
            this.get('#/', function(context){
                $('#app-content').empty();
            });

            this.get('#/about', function(context){
                var module1Content = require('text!./Module1/module.html');
                $('#app-content').append(module1Content);
            });

            this.get('#/contact', function(context){
                $('#app-content').append('Contact us');
            });
        });
        
        app.run('#/');
        
        }
    }
});