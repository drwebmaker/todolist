define(function (require) {

    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        TemplateHelper = require('Utils/TemplateHelper'),
        ToDoCollection = require('collection/ToDoCollection'),
        ToDoListView = require('view/ToDoListView'),
        ToDoFormView = require('view/ToDoFormView');

    var ViewApp = Backbone.View.extend({

        template: _.template(TemplateHelper.getTemplate('MainViewTemplate')),

        initialize: function () {
            var todoList = new ToDoCollection;

            this.listView = new ToDoListView({collection: todoList});
            this.formView = new ToDoFormView({collection: todoList});
        },
        render: function () {
            this.$el.html(this.template());
            this.$('.main-container').append(this.formView.render().$el);
            this.$('.main-container').append(this.listView.render().$el);

            return this;
        }
    });

    return ViewApp;

});