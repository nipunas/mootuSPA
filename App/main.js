define(function (require) {
    return {
        initialize: function () {
            var injector = require('./Helper/injector');

            var app = $.sammy('#holder', function () {
                this.get('#/', function (context) {
                    injector.clearContent('#app-content');
                });

                this.get('#/about', function (context) {
                    var module1Content = require('text!./Modules/Module1/module.html');
                    $('#app-content').append(module1Content);
                });

                this.get('#/contact', function (context) {
                    $('#app-content').append('Contact us');
                });
            });

            app.run('#/');

        }
    }
});