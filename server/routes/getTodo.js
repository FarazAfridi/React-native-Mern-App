const express = require("express");
const {getTodos} = require("../controllers/getTodos");

const router = express.Router();

router.get("/get_todos", getTodos);

module.exports = router;
