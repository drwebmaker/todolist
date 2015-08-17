define(function(require){
    var ToDoCollection = require('collection/ToDoCollection'),
        ToDoModel = require('model/ToDoModel'),
        ToDoListItemView = require('view/ToDoListItemView'),
        ToDoApp = require('ToDoApp'),
        ViewApp = require('view/ViewApp'),
        ToDoFormView = require('view/ToDoFormView'),
        sinon = require('sinon');

    describe('ToDo App', function() {
        describe('Tests for TodoList', function() {
            var todo = new ToDoApp("Get the milk");

            it('Can add Model instances as objects and arrays.', function() {
                var todos = new ToDoCollection();
                expect(todos.length).toBe(0);
                todos.add({ description: 'Clean the kitchen' });
                expect(todos.length).toBe(1);
                todos.add([
                    { description: 'Do the laundry'},
                    { description: 'Go to the gym'}
                ]);
                expect(todos.length).toBe(3);
            });

            it('Should be tied to a DOM element when created, based off the property provided.', function() {
                var todoView = new ToDoListItemView();
                expect(todoView.el.tagName.toLowerCase()).toBe('li');
            });

            it('Should contain classes "view noediting"', function() {
                var todoView = new ToDoListItemView();
                expect(todoView.el.className.toLowerCase()).toBe('view noediting');
            });

            it("Should be defined when we create it", function(){
                expect(todo).toBeDefined();
            });

            it("should have class 'view editing' if this Item is edited", function(){
                var todo = new ToDoListItemView("Get the milk");
                todo.edit();
                expect(todo.el.className.toLowerCase()).toBe('view editing');
            });

            it("should call create method", function(){
                var todoView = new ToDoFormView({collection: new Backbone.Collection()});
                var createStub = sinon.stub(todoView.collection, 'create');
                var valueStub = sinon.stub(todoView, '$').returns({val: function() {return 234}});


                expect(createStub).not.toHaveBeenCalled();
                expect(valueStub).not.toHaveBeenCalled();

                todoView.createOnEnter({keyCode: 11});

                expect(createStub).not.toHaveBeenCalled();
                expect(valueStub).not.toHaveBeenCalled();

                todoView.createOnEnter({keyCode: 13});


                expect(createStub).toHaveBeenCalled();
                expect(valueStub).toHaveBeenCalled();

                createStub.restore();
                valueStub.restore();
            });
        });
    });

});