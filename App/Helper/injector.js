define(function () {
    return {
        color: "black",
        size: "medium",
        clearContent: function (element) {
            if (element.indexOf('#') == 0) {
                $(element).empty();
            } else {
                $('#' + element).empty();
            }
        }
    }
});