const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp", function(err, db){
	if (err)
		return console.log("unable to connect to mongo server");
	
	console.log("Connected to mongodb server");

	//INSERT DOC
	db.collection("Todos").insertOne({
		text : "Prepare for AWA",
		completed : false
	}, function(err, result){
		if (err)
			return console.log("unable to insert todo ", err)
		console.log(JSON.stringify(result.ops, undefined, 2));1
	});

	// db.collection("Users").insertOne({
	// 	name : "Sanjay George",
	// 	age : 21,
	// 	location : "Kottayam, Kerala"
	// }, function(err, result){
	// 	if (err)
	// 		return console.log(err);
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	db.close();

})