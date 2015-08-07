var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

//var todos = [
//    {
//        id: 1,
//        description: "Developing Backbone.js Applications",
//    }
//];
//
//var nextId = 2;
//
//
//app.js.use(function (req, res, next) {
//    if(req.url.indexOf("/api") === 0 ||
//        req.url.indexOf("/bower-components") === 0 ||
//        req.url.indexOf("/scripts") === 0) {
//        return next();
//    }
//
//    res.sendFile(__dirname + '/public/index.html');
//});
//
//app.js.get('/api/books', function(req, res) {
//    res.json(todos);
//});
//
//app.js.get('/api/books/:id', function(req, res) {
//    var todo = todos.filter(function(todo) { return todos.id == req.params.id; })[0];
//
//    if(!todo) {
//        res.statusCode = 404;
//        return res.json({ msg: "Todos does not exist" });
//    }
//
//    res.json(todo);
//});
//
//app.js.post('/api/books', function(req, res) {
//    if(!req.body.author || !req.body.title) {
//        res.statusCode = 400;
//        return res.json({ msg: "Invalid params sent" });
//    }
//
//    var newToDO = {
//        author : req.body.author,
//        title : req.body.title,
//        id: nextId++
//    };
//
//    todos.push(newToDO);
//
//    res.json(newToDO);
//});
//
//app.js.put('/api/books/:id', function(req, res) {
//    if(!req.body.author || !req.body.title) {
//        res.statusCode = 400;
//        return res.json({ msg: "Invalid params sent" });
//    }
//
//    var todo = todos.filter(function(todo) { return todo.id == req.params.id; })[0];
//
//    if(!todo) {
//        res.statusCode = 404;
//        return res.json({ msg: "Book does not exist" });
//    }
//
//    todo.author = req.body.author;
//    todo.title = req.body.title;
//
//    res.json(todo);
//});
//
//app.js.delete('/api/books/:id', function(req, res) {
//    var book = todos.filter(function(todo) { return todo.id == req.params.id; })[0];
//
//    if(!todo) {
//        res.statusCode = 404;
//        return res.json({ msg: "Book does not exist" });
//    }
//
//    todos.splice(todos.indexOf(book), 1);
//
//    res.statusCode = 204;
//    res.send({});
//});

app.listen(8000);

