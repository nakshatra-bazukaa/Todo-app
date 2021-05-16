const express = require("express");

const db = require("./config/mongoose");
const Todo = require("./models/todo");

const app = express();

const port = 8000;

app.use(express.static("./assets"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
app.use(express.urlencoded());

app.get("/", (req, res) => {
  return res.render("todo-home");
});

app.post("/create-todo", (req, res) => {
  console.log(req.body);
  return res.redirect("back");
});

app.listen(port, (err) => {
  if (err) console.log(`Error in running the server: ${err}`);
  else console.log(`Server is running on port: ${port}`);
});
