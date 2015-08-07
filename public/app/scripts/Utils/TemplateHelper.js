define(function (require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery');

    function TemplateHelper() {}

    TemplateHelper.getTemplate = function(name) {
        return $.ajax({
            type: "GET",
            async: false,
            url : "app/templates/" + name + ".html",
            dataType: 'text',
            error: function() {
                throw new Error("Could not load " + name);
            }
        }).responseText;
    };

    return TemplateHelper;

});

