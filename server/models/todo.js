const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const todoSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    status: Boolean
  }
);

module.exports = mongoose.model("Todos", todoSchema);
