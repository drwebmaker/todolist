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
        $(".list-container").html(this.activeView.render().$el);
    }
});

var ViewApp = Backbone.View.extend({

    initialize: function() {
        var todoList = new ToDoCollection;

        this.listView = new ToDoListView({ collection: todoList });
        this.formView = new ToDoFormView({ collection: todoList });

        $(".main-container")
            .append(this.formView.render().$el)
            .append(this.listView.render().$el)
    }

});
//
//_.extend(ToDoApp.prototype, Backbone.Events);