require.config({
    baseUrl: "./app/scripts",
    paths: {
        "ToDoModel": "./Universe/Vector",
        "TemplateHelper": "./Universe/Grid",
        "ToDoCollection": "./Universe/lifelikeWorld",
        "ToDoListItemView": "./Universe/Plan",
        "ToDoListView": "./Universe/View",
        "ToDoFormView": "./Universe/World"
    }
});

requirejs(new ToDoApp());