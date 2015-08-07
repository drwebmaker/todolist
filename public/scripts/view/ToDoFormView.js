var ToDoFormView = Backbone.View.extend({
    template: _.template(TemplateHelper.getTemplate('ToDoFormViewTemplate.html')),

    events: {
        "keypress #new-todo":  "createOnEnter"
    },

    createOnEnter: function(e) {
        if (e.keyCode != 13) return;
        if (!this.$("[name=description]").val()) return;

        var model = new ToDoModel({
            description: this.$("[name=description]").val()
        });
        this.collection.create({description: this.$("[name=description]").val()});

        //this.collection.add(model);
        this.$("[name=description]").val('');
    },

    render: function() {
        this.$el.html(this.template());

        return this;
    }
});