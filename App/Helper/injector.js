define(function () {
    return {
        color: "black",
        size: "medium",
        
        //When an element is given clear the data inside it
        clearContent: function (element) {
            if (element.indexOf('#') == 0) {
                $(element).empty();
            } else {
                $('#' + element).empty();
            }
        }
    }
});