var ToDoFormView = Backbone.View.extend({
    template: _.template($("#todo-form-template").html()),

    events: {
        "keypress #new-todo":  "createOnEnter",
        "dblclick .edit": "edit"
    },

    edit: function() {},

    createOnEnter: function(e) {
        if (e.keyCode != 13) return;

        var model = new ToDoModel({
            description: this.$("[name=description]").val()
        });
        this.collection.add(model);
        this.$("[name=description]").val('');
    },

    render: function() {
        this.$el.html(this.template());

        return this;
    }
});