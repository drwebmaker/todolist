define(function(require){
    describe('ToDo App', function() {
        var ToDoListItemView = require('view/ToDoListItemView');

        describe('Tests for ToDoFormView', function() {
            it('Should be tied to a DOM element when created, based off the property provided.', function() {
                var todoView = new ToDoListItemView();
                expect(todoView.el.tagName.toLowerCase()).toBe('li');
            });

            it('Should contain classes "view noediting"', function() {
                var todoView = new ToDoListItemView();
                expect(todoView.el.className.toLowerCase()).toBe('view noediting');
            });

            it("should have class 'view editing' if this Item is edited", function(){
                var todo = new ToDoListItemView("Get the milk");
                todo.edit();
                expect(todo.el.className.toLowerCase()).toBe('view editing');
            });
        });
    });
});

