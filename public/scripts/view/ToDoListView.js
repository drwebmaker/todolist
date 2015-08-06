var ToDoListView = Backbone.View.extend({
    template: _.template($("#todo-list-template").html()),

    render: function() {
        this.$el.html(this.template());

        this.collection.each(this.addItemView, this);
        return this;
    },

    initialize: function() {
        this._subview = [];

        this.listenTo(this.collection, "add", this.addItemView);
    },

    addItemView: function(todo) {
        var view = new ToDoListItemView({ model: todo });
        this._subview.push(view);
        this.$("ul").append(view.render().$el);
    }

});
