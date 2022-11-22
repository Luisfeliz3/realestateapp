const router = require("express").Router();
// const commentRoutes = require("./comments");

const transactionRoutes = require("./transactions");
const userRoutes = require("./user");


// transaction routes
router.use("/transactions", transactionRoutes);
router.use("/user", userRoutes);




module.exports = router;
