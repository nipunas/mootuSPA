define(function(require){
//    var module1 = require('./Module1/module');
    var module1Content = require('text!./Module1/module.html');

    $('#app-content').append(module1Content);
//    $('#app-content').append(module1.loadHtml());
});