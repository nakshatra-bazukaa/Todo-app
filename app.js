$(function () {
  //   Submit event triggred when add task clicked
  $("#todo-form").submit((event) => {
    event.preventDefault();

    const todoNote = $("#todo-form")[0].todoNote.value;
    const category = $("#categoryButton").text();
    const deadline = $("#todo-form")[0].date.value;
    $("#added-todos").append(
      `<div class="container-fluid">
        <div class="d-flex bd-highlight">
          <div class="p-2 bd-highlight">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id=""
              />
            </div>
          </div>
          <div class="p-2 bd-highlight">
            <p class="fw-normal todo-content">${todoNote}</p>
            <i class="fa fa-calendar" aria-hidden="true"></i>
            <p class="text-muted deadline">${deadline}</p>
          </div>
          <div class="ms-auto p-2 bd-highlight">
            <h3><span class="badge bg-primary">${category}</span></h3>
          </div>
        </div>
        <!-- divider -->
        <div class="dropdown-divider"></div>
      </div>`
    );
    $("#categoryButton").text("Choose a category");
    $("#todoNote").val("");
    $("#deadline").val("");
  });

  //   To toggle button text when corrosponding task is clicked
  $("#personal").click(() => {
    $("#categoryButton").html("Personal");
  });
  $("#schooling").click(() => {
    $("#categoryButton").html("Schooling");
  });
  $("#work").click(() => {
    $("#categoryButton").html("Work");
  });
  $("#cleaning").click(() => {
    $("#categoryButton").html("Cleaning");
  });
  $("#other").click(() => {
    $("#categoryButton").html("Other");
  });
});
