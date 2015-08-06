var ToDoListItemView = Backbone.View.extend({
    tagName: "li",
    className: "view",
    template: _.template($("#todo-list-item-template").html()),

    events: {
        "dblclick": "edit",
        "keypress":  "finishEdit"
    },

    edit: function() {
        this.trigger("edit", this);
        this.$el.addClass("editing");
        this.$("input").prop('disabled', false);
        this.$("input").focus();
    },

    finishEdit: function(e) {
        if (e.keyCode != 13) return;

        this.$("input").prop('disabled', true);

    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});
