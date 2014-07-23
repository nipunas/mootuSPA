define(function (require) {
    return {
        initialize: function () {
            var router = require('./Helper/router');
            
            router.run();
        }
    }
});