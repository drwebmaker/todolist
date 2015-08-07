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
        $(".main-container").html(this.activeView.render().$el);
    }
});

var ViewApp = Backbone.View.extend({

    initialize: function() {
        var todoList = new ToDoCollection;

        this.listView = new ToDoListView({ collection: todoList });
        this.formView = new ToDoFormView({ collection: todoList });
    },
    render: function () {
        this.$el.append(this.formView.render().$el);
        this.$el.append(this.listView.render().$el);

        return this;
    }
});