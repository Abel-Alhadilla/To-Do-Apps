const taskInput = document.getElementById("task-input");
const inputButton = document.getElementById("input-button");
const columnContainer = document.getElementById("column-container");

let nextId = 1;

inputButton.addEventListener("click", addTask);

function addTask() {
  if (taskInput.value === "") {
    window.alert(`Please add a task`);
  } else {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    taskContainer.setAttribute("id", `${nextId}`);

    const image = document.createElement("img");
    image.classList.add("uncheck-image");
    image.src = "../image/unchecked.png";
    // FUNCTION CHECK
    image.addEventListener("click", () => {
      if(image.getAttribute("src") === "../image/checked.png"){
        image.src = "../image/unchecked.png";
        taskText.style.textDecoration = "none";
        taskText.style.color = "black";
      } else {
        image.src = "../image/checked.png";
        taskText.style.textDecoration = "line-through";
        taskText.style.color = "gray";
      }
    }); 
    
    taskContainer.appendChild(image);

    const taskText = document.createElement("p");
    taskText.classList.add("task-text");
    taskText.textContent = taskInput.value;
    taskContainer.appendChild(taskText);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";
    // FUNCTION DELETE
    deleteButton.addEventListener("click", () => {
      taskContainer.remove();
    });
    taskContainer.appendChild(deleteButton);

    columnContainer.appendChild(taskContainer);
    nextId++;
    taskInput.value = "";
  }
}
