const db = require("../config/mongoose");
const Todo = require("../models/todo");

module.exports.deleteTodos = (req, res) => {
  // console.log(req.body);
  for(const key in req.body)
    Todo.findByIdAndDelete(key, (err) => {
      if(err)
        console.log("Error in deleting an object from db");
    })
  return res.redirect("back");
};
