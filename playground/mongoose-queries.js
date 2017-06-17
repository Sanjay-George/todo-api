const {ObjectID} = require("mongodb");
const {mongoose} = require("./../server/db/mongoose.js");
const {Todo} = require("./../server/models/todos.js");



var id = "59426fbe1d28f20d4221a026";

if ( ! ObjectID.isValid(id) )
	console.log("Id is not valid.");

// // TO RETURN ALL TODOS, NO QUERIES.
// Todo.find().then(function(todos){

// 	console.log(JSON.stringify(todos, undefined, 2));

// });

// RETURN ALL TODOS BASED ON QUERY
Todo.find({
	_id : id, 
}).then(function(todos){
	console.log(JSON.stringify(todos, undefined, 2));
});

// RETURN SINGLE TODO BASED ON QUERY
Todo.findOne({
	_id : id,
}).then(function(todo){
	console.log(JSON.stringify(todo, undefined, 2));
});

// SEARCH BY ID 
Todo.findById(id).then(function(todo){
	if (!todo)
		return console.log("Unable to find the todo");
	console.log(JSON.stringify(todo, undefined, 2));
})