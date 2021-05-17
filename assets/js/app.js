// $(function () {
//   // List to hold all todos
//   let todos = [];

//   //   Submit event triggred when add task clicked
//   $("#todo-form").submit((event) => {
//     event.preventDefault();

//     // Taking input and checking whether every information is has been added or not
//     const todoNote = $("#todo-form")[0].todoNote.value;
//     if (todoNote.trim() === "") {
//       alert("Please add a todo note");
//       return;
//     }

//     const category = $("#categoryButton").text();
//     if (category.trim() === "Choose a category") {
//       alert("Please choose a category");
//       return;
//     }

//     const deadline = $("#todo-form")[0].date.value;
//     if (deadline.trim() === "") {
//       alert("Please choose a deadline for your note");
//       return;
//     }

//     generateTodo(todoNote, category, deadline);

//     printTodos();

//     // Reseting the form
//     $("#categoryButton").text("Choose a category");
//     $("#todoNote").val("");
//     $("#deadline").val("");
//   });

//   // Template to generate a todo
//   const generateTodo = (todoNote, category, deadline) => {
//     todos.push({
//       todoNote,
//       category,
//       deadline,
//     });
//   };

//   // To print all the todos in the list
//   const printTodos = () => {
//     $("#added-todos").html("");
//     todos.map((todo, idx) => {
//       const { todoNote, category, deadline } = todo;
//       let catColor = "";
//       switch (category) {
//         case "Personal":
//           catColor = "primary";
//           break;
//         case "Schooling":
//           catColor = "secondary";
//           break;
//         case "Work":
//           catColor = "success";
//           break;
//         case "Cleaning":
//           catColor = "warning";
//           break;
//         case "Other":
//           catColor = "info";
//           break;
//       }
//       $("#added-todos").append(
//         `<div
//           class="container-fluid"
//           id="todo-container-${idx}"
//         >
//           <div class="d-flex bd-highlight">
//             <div class="p-2 bd-highlight">
//               <div class="form-check">
//                 <input
//                   class="form-check-input"
//                   type="checkbox"
//                   value=""
//                   name="check"
//                   id="check-${idx}"
//                 />
//               </div>
//             </div>
//             <div class="p-2 bd-highlight">
//               <p class="fw-normal todo-content">${todoNote}</p>
//               <i class="fa fa-calendar" aria-hidden="true"></i>
//               <p class="text-muted deadline">${deadline}</p>
//             </div>
//             <div class="ms-auto p-2 bd-highlight">
//               <h3><span class="badge bg-${catColor}">${category}</span></h3>
//             </div>
//           </div>
//           <!-- divider -->
//           <div class="dropdown-divider"></div>
//         </div>`
//       );
//     });
//   };

//   // Delete a todo
//   $("#delete-todo").click(() => {
//     todos = todos.filter((todo, idx) => !$(`#check-${idx}`).prop("checked"));
//     printTodos();
//   });

//   //   To toggle button text when corrosponding task is clicked
//   $("#personal").click(() => {
//     $("#categoryButton").html("Personal");
//   });
//   $("#schooling").click(() => {
//     $("#categoryButton").html("Schooling");
//   });
//   $("#work").click(() => {
//     $("#categoryButton").html("Work");
//   });
//   $("#cleaning").click(() => {
//     $("#categoryButton").html("Cleaning");
//   });
//   $("#other").click(() => {
//     $("#categoryButton").html("Other");
//   });
// });
