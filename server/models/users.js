var mongoose = require("mongoose");

//USER MODEL
var User = mongoose.model("User", {
	email : {
		required : true,
		type : String, 
		minlength : 1, 
		trim : true,
	}
});


module.exports = {User};


// newUser = new User({
// 	email : " sajanigeorge320482@yahoo.com "
// });

// newUser.save(function(err, doc){
// 	if (err)
// 		return console.log("Unable to save doc ", err);
// 	console.log(JSON.stringify(doc, undefined, 2));
// })