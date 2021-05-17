const db = require("../config/mongoose");
const Todo = require("../models/todo");

module.exports.createTodo = (req, res) => {
  // console.log(req.body);
  Todo.create(req.body, (err, newTodo) => {
    if (err) console.log("Error in creating todo");
    else console.log("***************", "New Todo Created", "***************", newTodo, "***************");
    return res.redirect("back");
  });
};
