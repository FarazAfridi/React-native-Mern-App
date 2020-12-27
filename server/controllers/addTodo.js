const Todos = require("../models/todo");

exports.createTodo = async (req, res) => {
 try {const {id, status, name} = req.body.todo;
 const newTodo = await new Todos({
   id,
   name,
   status,
 }).save()
 console.log('todo added')
} catch(err){
  console.log(err);
}
};
