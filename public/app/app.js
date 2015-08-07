require.config({
    baseUrl: "app/scripts",
    paths: {
        backbone: "bower_components/backbone/backbone",
        underscore: "bower_components/underscore/underscore",
        jquery: "bower_components/jquery/dist/jquery",
        'backbone.localStorage': "bower_components/backbone.localStorage/backbone.localStorage"
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'backbone.localStorage': {
            deps: ['backbone']
        }
    }
});

requirejs(["ToDoApp"], function(ToDoApp) {
    new ToDoApp();
});