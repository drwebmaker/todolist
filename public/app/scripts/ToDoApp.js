define(function(require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        ViewApp = require("view/ViewApp");

    var ToDoApp = Backbone.Router.extend({
        routes: {
            "(/)": "viewToDoList"
        },

        initialize: function() {
            this.activeView = undefined;
            Backbone.history.start({ pushState: true });
        },

        viewToDoList: function() {
            this.activeView && this.activeView.remove();
            this.activeView = new ViewApp();
            $("body").html(this.activeView.render().$el);
        }
    });

    return ToDoApp;
});
