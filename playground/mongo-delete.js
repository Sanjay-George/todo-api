const {objectID, MongoClient} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", function(err, db){
	if (err)
		return console.log("Unable to connect");


	db.collection("Todos").findOneAndDelete({text : "Prepare for GRE"}, function(err, result){
		console.log(result);
	})

	db.close();
})