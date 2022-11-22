const db = require("../models");


// Defining methods for the userController
module.exports = {

   login: function(req, res) {
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
         _id: req.user._id,
         username: req.user.username,
         email: req.user.email,
         // comments: req.user.comments
      });
   },

   // Route (controller) for signing up a user. The user's password is automatically hashed and stored securely thanks to
	// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
	// otherwise send back an error
   signup: function (req, res) {
		db.Users.create({
		// db.User.insertOne({
         username: req.body.username,
			email: req.body.email,
         password: req.body.password,
		})
      .then(() => {res.redirect(307, "/api/user/login") })
      .catch((err) => { res.status(401).json(err) });
   },
   
   // to be implemented in the front end
   logout: function(req, res)  {
		req.logout();
		res.redirect("/");
   },
   
   authenticate: function( req, res) {
      // The user is not logged in, send back an empty object
     
      return !req.user
      
         ? res.status(401).end("user isn't logged in")
         // Otherwise send back the user's email and id
         // Sending back a password, even a hashed password, isn't a good idea
         : res.json({
               _id: req.user._id,
               username: req.user.username,
               email: req.user.email,
               // comments: req.user.comments
         })
         
   }

}
