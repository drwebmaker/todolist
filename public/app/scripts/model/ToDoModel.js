define(function (require) {

    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery');

    var ToDoModel = Backbone.Model.extend({
        defaults: {
            description: "New task...",
            id: undefined
        }
    });

    return ToDoModel;
});
