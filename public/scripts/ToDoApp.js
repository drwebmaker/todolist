//var ToDoApp = Backbone.Router.extend({
    //routes: {
    //    "(/)": "viewToDoList"
    //},
    //
    //initialize: function() {
    //    this.activeView = undefined;
    //    Backbone.history.start({ pushState: true });
    //},
    //
    //viewToDoList: function() {
    //    this.activeView && this.activeView.remove();
    //
    //    this.activeView = new ToDoListView();
    //
    //    $("body").html(this.activeView.render().$el);
    //}
//});

var ToDoApp = function() {
    this.todoList = new ToDoCollection([
        {
            description: "First todo"
        },
        {
            description: "Second todo"
        }
    ]);

    this.listView = new ToDoListView({ collection: this.todoList });
    this.formView = new ToDoFormView({ collection: this.todoList });

    this.listenTo(this.listView, "edit", function(e) {
        console.log(e);
    });

    $(".main-container")
        .append(this.formView.render().$el)
        .append(this.listView.render().$el)
};

_.extend(ToDoApp.prototype, Backbone.Events);