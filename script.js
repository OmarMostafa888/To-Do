const addBtn = document.querySelector(".add-btn");
const taskList = document.querySelector(".task-list");

function addTask() {
  if (document.getElementById("task-input").value.length >= 3) {
    const item = document.createElement("div");
    taskList.appendChild(item);
    item.classList.add("task-item");
    ////////////////////////////////////////////////////////
    const label = document.createElement("label");
    item.appendChild(label);
    ////////////////////////////////////////////////////////
    const closeIcon = document.createElement("span");
    item.appendChild(closeIcon);
    closeIcon.classList.add("material-symbols-outlined", "x-icon");
    closeIcon.innerHTML = "close";
    ////////////////////////////////////////////////////////
    const checkBox = document.createElement("input");
    label.appendChild(checkBox);
    checkBox.type = "checkbox";
    ////////////////////////////////////////////////////////
    const checkBoxText = document.createElement("span");
    label.appendChild(checkBoxText);
    checkBoxText.classList.add("checkbox-text");
    checkBoxText.innerText = document.getElementById("task-input").value;
    document.getElementById("task-input").value = "";
    closeIcon.addEventListener("click", () => {
      closeIcon.parentElement.remove();
    });
  } else {
    alert("Please enter a task the contains at least 3 characters");
  }
}

let taskInput = document.getElementById("task-input");

function enterFunction(e) {
  if (e.code === "Enter") {
    addTask();
  }
}

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", enterFunction);
