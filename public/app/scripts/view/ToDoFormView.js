define(function (require) {

    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        TemplateHelper = require('Utils/TemplateHelper');

    var ToDoFormView = Backbone.View.extend({
        template: _.template(TemplateHelper.getTemplate('ToDoFormViewTemplate')),

        events: {
            "keypress #new-todo":  "createOnEnter"
        },

        initialize: function() {
            this.collection.fetch().done(_.bind(this.render, this));
        },

        createOnEnter: function(e) {
            if (e.keyCode != 13) return;
            if (!this.$("[name=description]").val()) return;

            this.collection.create({description: this.$("[name=description]").val()});

            this.$("[name=description]").val('');
        },

        render: function() {
            this.$el.html(this.template());

            return this;
        }
    });

    return ToDoFormView;
});

