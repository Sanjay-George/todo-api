var express = require("express");
var bodyParser = require("body-parser");

var mongoose = require("./db/mongoose").mongoose;
var {Todo} = require("./models/todos");
var {User} = require("./models/users");

var app = express();

app.use(bodyParser.json());

// POST /todos
app.post("/todos", function(req, res){
	// console.log(req.body)

	var todo = new Todo({
		text : req.body.text
	});

	todo.save(function(err, doc){
		if (err)
			res.status(400).send(err) ;
		else
			res.send(doc);
	});

});

// GET /todos
app.get("/todos", function(req, res){

	Todo.find(function(err, todos){
		if (err)
			res.status(400).send(err);
		
		else res.send({todos, status : 200});
	});
});



app.listen(3000, function(){
	console.log("Server started on port 3000");
});





