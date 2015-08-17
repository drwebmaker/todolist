require.config({
    baseUrl: "scripts",
    paths: {
        backbone: "bower_components/backbone/backbone",
        underscore: "bower_components/underscore/underscore",
        jquery: "bower_components/jquery/dist/jquery",
        'backbone.localStorage': "bower_components/backbone.localStorage/backbone.localStorage",
        "text": "bower_components/text/text",
        "sinon": "bower_components/sinonjs/sinon"
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
        },
        sinon: {
            exports: 'sinon'
        }
    }
});

requirejs(["ToDoApp"], function(ToDoApp) {
    new ToDoApp();
});