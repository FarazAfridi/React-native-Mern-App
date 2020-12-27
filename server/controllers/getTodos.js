const Todos = require("../models/todo");

exports.getTodos = async (req, res) => {
await Todos.find((err, todos) => {
   if(!err){
      res.json(todos)
   }
 })
 console.log('get api called')

  
};
