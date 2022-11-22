const mongoose = require("mongoose");
const db = require("../models");
const { mongoOptions } = require("./config");

const moment = require('moment')

console.log(moment().add(10, 'days').format("MMM DD") );


// const seed = require("./seedLocalDB");

mongoose.createConnection(
	// Name below is name of local (Robo3T)
	process.env.MONGODB_URI || "mongodb://localhost/paymentcenter",
	mongoOptions
);





setTimeout(function () {
	process.exit(0);
}, 5000);

const seed = function () {
	db.Transactions.deleteMany({})
		.then(() => db.Transactions.create(transactions))
		.then((data) => {
			console.log(data.length + " records inserted!");
		})
		.catch((err) => {
			console.error(err);
		});

};
seed();

module.exports = { seed };