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

        this.activeView = new ToDoListView();

        $("body").html(this.activeView.render().$el);
    }
});