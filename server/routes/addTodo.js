const express = require("express");

const router = express.Router();

// import
const { createTodo } = require("../controllers/addTodo");

router.post("/add_todo", createTodo);

module.exports = router;
