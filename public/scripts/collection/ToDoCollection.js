var ToDoCollection = Backbone.Collection.extend({
    model: ToDoModel,

    localStorage: new Store("todos-backbone")
});