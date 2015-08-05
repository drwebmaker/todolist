var ToDoListView = Backbone.View.extend({
    template: _.template($("#todo-list-template").html()),

    render: function() {
        this.$el.html(this.template());

        this.collection.each(this.addItemView, this);
        return this;
    },

    addItemView: function(todo) {
        var view = new ToDoListItemView({ model: todo });

        //this.listenTo(view, "editToDo", function() {
        //    this.trigger("editToDo", view);
        //});
        //self._subview.push(view);
        this.$("ul").append(view.render().$el);
    }

    //events: {
    //    "click .addToDo": "addToDo"
    //},
    //
    //addToDo: function() {
    //    window.app.navigate("/books/new", { trigger: true });
    //},
    //
    //initialize: function() {
    //    this.collection = new BookColection();
    //    this._subview = [];
    //
    //    this.listenTo(this.collection, "add", this.addItmeView);
    //    this.listenTo(this.collection, "remove", this.removeItmeView);
    //
    //    this.collection.fetch();
    //},
    //
    //removeItmeView: function(book) {
    //    var view = _.findWhere(this._subview, { model: book });
    //
    //    if(view) {
    //        this._subview.splice(_.indexOf(this._subview, view), 1);
    //        view.remove();
    //    }
    //},
    //
    //addItmeView: function(book) {
    //    var self = this;
    //    var view = new BookListItmeView({ model: book });
    //
    //    this.listenTo(view, "editBook", function() {
    //        this.trigger("editBook", view);
    //    });
    //    self._subview.push(view);
    //    self.$("tbody").append(view.render().$el);
    //},


    //remove: function() {
    //    _.invoke(this._subview, "remove");
    //
    //    Backbone.View.prototype.remove.apply(this, arguments);
    //}
});
