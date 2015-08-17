define(function(require){
    describe('ToDo App', function() {
        var ToDoFormView = require('view/ToDoFormView'),
            sinon = require('sinon');

        describe('Tests for ToDoFormView', function() {
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

