const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", function(err, db){
	if (err)
		return console.log("Unable to connect to mongo server");

	// // FETCH BY OBJECTID
	// db.collection("Todos").find({_id : new ObjectID("593d2fd1bd4fae1293233083")}).toArray(function(err, docs){
	// 	if (err)
	// 		return console.log("Unable to fetch documents");

	// 	console.log(JSON.stringify(docs, undefined, 2));
	// });

	// // COUNT AND OTHER METHODS ON CURSOR
	// db.collection("Todos").find().count(function(err, count){
	// 	if (err)
	// 		return console.log(err)
	// 	console.log("Total number of docs : " + count);
	// })

	// START FROM 2ND DOC AND FETCH 2 DOCS
	db.collection("Todos").find().skip(2).limit(2).toArray(function(err, docs){
		console.log(JSON.stringify(docs, undefined, 2));
	})
 
	db.close();

})