var ToDoListItemView = Backbone.View.extend({
    tagName: "li",
    className: "view noediting",
    template: _.template(TemplateHelper.getTemplate('ToDoListItemViewTemplate.html')),

    events: {
        "dblclick": "edit",
        "keypress": "finishEdit",
        "blur input": "closed",
        "click a.destroy" : "destroy"
    },

    initialize: function(){
        this.collection = new ToDoCollection();

        this.model.bind('change', this.render, this);
        this.model.bind('destroy', this.remove, this);

        this.collection.fetch();
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
        this.model.save({description: this.$("input").val()});
    },

    destroy: function() {
        this.model.destroy();
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});
