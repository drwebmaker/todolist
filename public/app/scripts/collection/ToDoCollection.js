define(function (require) {

    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        localStorage = require('backbone.localStorage'),
        ToDoModel = require('model/ToDoModel');

    var ToDoCollection = Backbone.Collection.extend({
        model: ToDoModel,

        localStorage: new Backbone.LocalStorage("todos-backbone")
    });

    return ToDoCollection;
});
