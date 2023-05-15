//button variables
const editButton = "<button class='edit_btn'>Edit</button>";
const deleteButton = "<button class='delete_btn'>Delete</button>";
const updateButton = "<button class='update_btn'>Update</button>";

$(document).ready(() => {
  $("#createTask").click(() => {
    const txt = $("#task-creation-field").val();
    if (txt != "" && txt.match(/\w/g)) {
      const todoList = $("#messageBox > ul");
      if (
        !todoList.find(".text_content").filter(function () {
          return $(this).text().toLowerCase() === txt.toLowerCase() ;
        }).length
      ) {
        todoList.append(
          "<li class='todo_created_task'><p class='text_content'>" +
            txt +
            "</p><div class='btn_control'>" +
            editButton +
            deleteButton +
            "</div></li>"
        );
      } else {
        alert("This task already exists.");
      }
    } else {
      alert("Provide some stuff to create your task..");
    }

    $("#task-creation-field").val("");
  });

  //delete button
  $(document).on("click", ".delete_btn", function () {
    $(this).parents(".todo_created_task").remove();
    setTimeout(() => {
      alert('Deleted successfully')
    }, 0);
  });

  //edit button
  $(document).on("click", ".edit_btn", function () {
    const edited_txt = $(this).parent().prev().text();
    $(this)
      .parents(".todo_created_task")
      .html(
        "<input type='text' class='updated_task'>" +
          "<div class='btn_control'>" +
          updateButton +
          "</div>"
      );
    $(".updated_task").focus().val(edited_txt);
  });
});

//update button
$(document).on("click", ".update_btn", function () {
  const updatedTask = $(this).parent().prev(".updated_task").val();
  $(this)
    .parents(".todo_created_task")
    .find(".updated_task")
    .replaceWith("<p class='updated_text_content'></p>");
  $(this).parent().prev(".updated_text_content").text(updatedTask);
  $(".update_btn").remove();
  $(".btn_control").html(editButton + deleteButton);

  setTimeout(() => {
    alert("Updated successfully.");
  }, 0);
});
