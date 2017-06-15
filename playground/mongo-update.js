const {ObjectID, MongoClient} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", function(err, db){
	if (err)
		return console.log("Unable to connect");


	// UPDATE ONE
	db.collection("Todos").findOneAndUpdate({
		// _id : new ObjectID("593dfc24a6d199dfd8c22e44"),
		completed : true
	}, {
		$set : {
			completed : true
		}

	},{
		returnOriginal : false

	}, function(err, result){
		if (err)
			return console.log(err);
		console.log(result);
	});

	// UPDATE MULTIPLE 
	db.collection("Todos").updateMany({
		// _id : new ObjectID("593dfc24a6d199dfd8c22e44"),
		completed : true
	}, {
		$set : {
			completed : false
		}

	}, function(err, result){
		if (err)
			return console.log(err);
		console.log(result.result);
	});

	db.close();
})