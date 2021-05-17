const db = require("../config/mongoose");
const Todo = require("../models/todo");

module.exports.home = (req, res) => {
  Todo.find({}, (err, todos) => {
    if (err) {
      console.log("Error in fetching todos from db");
      return;
    }
    // console.log(todos);
    return res.render("todo-home", {todos});
  });
};
