define(function(require){
    var ToDoCollection = require('collection/ToDoCollection');

    describe('ToDo App', function() {
        describe('Tests for TodoList', function() {
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

                expect(true).toBeTruthy();
            });
        });
    });

});