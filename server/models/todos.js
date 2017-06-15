var mongoose = require("mongoose");

// set up model
var Todo = mongoose.model("Todo", {
	text : {
		type : String,
		required : true, 
		minlength : 1,
		trim : true
	},
	completed : {
		type : Boolean,
		default : false
	},
	completedAt : {
		type : Number,
		default : null
	}
});


module.exports = {Todo};



// //new instance
// var newTodo = new Todo({
// 	text : "Wash the clothes"
// });

// // insert instance into mongo
// newTodo.save(function(err, doc){
// 	if (err)
// 		return console.log("unable to save todo", err);
// 	console.log(doc);
// });
