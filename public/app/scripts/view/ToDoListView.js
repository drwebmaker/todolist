define(function (require) {

    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        ToDoListItemView = require('view/ToDoListItemView');

    var ToDoListView = Backbone.View.extend({
        tagName: "ul",

        render: function() {
            this.$el.empty();
            this.collection.each(this.addItemView, this);
            return this;
        },

        initialize: function() {
            this._subview = [];

            this.listenTo(this.collection, "add", this.addItemView);

            this.collection.fetch();
        },

        addItemView: function(todo) {
            var view = new ToDoListItemView({ model: todo });
            this._subview.push(view);
            this.$el.append(view.render().$el);
        }

    });

    return ToDoListView;
});

