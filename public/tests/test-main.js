var tests = [];
for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: "/base/public/scripts",

    paths: {
        backbone: "bower_components/backbone/backbone",
        underscore: "bower_components/underscore/underscore",
        jquery: "bower_components/jquery/dist/jquery",
        'backbone.localStorage': "bower_components/backbone.localStorage/backbone.localStorage",
        "text": "bower_components/text/text"
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
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});