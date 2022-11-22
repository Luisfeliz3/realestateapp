const db = require("../models");

module.exports = {
	findAll: function (req, res) {
		db.Transactions.find(req.query).sort({_id: -1})
			.then((transactions) => {
		
				res.json(transactions);
			})
			.catch((err) => res.status(422).json(err));
	},
};


