var ToDoFormView = Backbone.View.extend({
    template: _.template($("#todo-form-template").html()),

    events: {
        "keypress #new-todo":  "createOnEnter",
        "dblclick .edit": "edit"
    },

    edit: function() {},

    createOnEnter: function(e) {
        if (e.keyCode != 13) return;
        //if (!this.input.val()) return;
        console.log(this.input);
        //todoList.create({title: this.input.val()});
        //this.input.val('');
    },

    render: function() {
        this.$el.html(this.template());

        return this;
    }
});