define(function (require) {

    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        ToDoCollection = require('collection/ToDoCollection'),
        ToDoListItemViewTemplate = require('text!templates/ToDoListItemViewTemplate.html');

    var ToDoListItemView = Backbone.View.extend({
        tagName: "li",
        className: "view noediting",
        template: _.template(ToDoListItemViewTemplate),

        events: {
            "dblclick": "edit",
            "keypress": "finishEdit",
            "blur input": "closed",
            "click a.destroy" : "destroy"
        },

        initialize: function(){
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },

        edit: function() {
            this.trigger("edit", this);
            this.$el.addClass("editing");
            this.$el.removeClass("noediting");
            this.$("input").attr('disabled', false);
            this.$("input").focus();
        },

        closed: function() {
            this.$el.removeClass("editing");
            this.$el.addClass("noediting");
            this.$("input").attr('disabled', true);
        },

        finishEdit: function(e) {
            if (e.keyCode != 13) return;
            if (!this.$("[name=description]").val()) this.model.destroy();
            this.$el.removeClass("editing");
            this.$el.addClass("noediting");
            this.$("input").attr('disabled', true);
            this.$("input").blur();
            this.model.save({description: this.$("input").val()});
        },

        destroy: function() {
            this.model.destroy();
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return ToDoListItemView;
});


