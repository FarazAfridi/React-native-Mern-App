const express = require("express");
const {removeTodo} = require('../controllers/removeTodo');

const router = express.Router();

router.delete("/remove_todo", removeTodo)

module.exports = router;