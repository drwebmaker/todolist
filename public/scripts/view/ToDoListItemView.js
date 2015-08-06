var ToDoListItemView = Backbone.View.extend({
    tagName: "li",
    className: "view noediting",
    template: _.template(TemplateHelper.getTemplate('ToDoListViewTemplate.html')),

    events: {
        "dblclick": "edit",
        "keypress": "finishEdit",
        "blur input": "closed"
    },

    edit: function() {
        this.trigger("edit", this);
        this.$el.addClass("editing");
        this.$el.removeClass("noediting");
        this.$("input").prop('disabled', false);
        this.$("input").focus();
    },

    closed: function() {
        this.$el.removeClass("editing");
        this.$el.addClass("noediting");
        this.$("input").prop('disabled', true);
    },

    finishEdit: function(e) {
        if (e.keyCode != 13) return;
        this.$el.removeClass("editing");
        this.$el.addClass("noediting");
        this.$("input").prop('disabled', true);
        this.$("input").blur();

    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});
