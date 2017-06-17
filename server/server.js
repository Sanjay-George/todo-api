var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require("mongodb");

var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/todos");
var {User} = require("./models/users");

var app = express();;
app.use(bodyParser.json()); // parse JSON string send from front end 

// POST /todos
app.post('/todos', function(req, res){
	var todo = new Todo({
		text : req.body.text
	});

	todo.save(function(err, doc){
		if (err)	res.status(400).send(err);
		else		res.send(doc);
	})
})

// GET /todos
app.get('/todos', function(req, res){

	Todo.find(	function(err, todos){
		if(err)		res.status(400).send(err)
		else 		res.send({todos})
	});

})

// GET /todos/123
app.get('/todos/:id', function(req, res){
	var id = req.params.id;
	// res.send(id);
	if ( !ObjectID.isValid(id))
		return res.status(404).send();

	// if id valid, then fetch by id and display
	Todo.findById(id).then(function(todo){
		if(!todo)
			res.status(404).send(todo);
		else
			res.send({todo});
	}).catch(function(err){
		res.status(400).send(err);
	})

})

app.listen(3000, function(){
	console.log("Server started on port 3000");
})



