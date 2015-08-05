var ToDoListItemView = Backbone.View.extend({
    tagName: "li",
    template: _.template($("#todo-list-item-template").html()),

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});
