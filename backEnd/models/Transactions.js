const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const TransactionsSchema = new Schema({
	date: { type: String, required: true },
	description: { type: String, required: true },
	amount: { type: Number, required: false }
});

const Transactions = mongoose.model("Transactions", TransactionsSchema);

module.exports = Transactions;
