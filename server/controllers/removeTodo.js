const Todos = require("../models/todo");

exports.removeTodo = async (req, res) => {
  await Todos.findOneAndRemove({_id: req.body.id})
    .then((res) => console.log(res, " deleted"))
    .catch((err) => console.log(err));
};
