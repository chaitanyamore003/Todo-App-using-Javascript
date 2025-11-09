let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

displayItems();

function addTodo() {
  let inputElement = document.querySelector("#input");
  let dateElement = document.querySelector("#date");
  let todoitem = inputElement.value.trim();
  let tododate = dateElement.value;

  if (todoitem === "") {
    alert("Please enter the todo task");
    return;
  } else if (tododate === "") {
    alert("Please enter the date");
    return;
  }

  todoList.push({ item: todoitem, dueDate: tododate });
  inputElement.value = "";
  dateElement.value = "";

  localStorage.setItem("todoList", JSON.stringify(todoList));

  displayItems();
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  localStorage.setItem("todoList", JSON.stringify(todoList));
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");
  let newhtml = "";

  if (todoList.length <= 0) {
    newhtml = `<h2>Add Todo To Display</h2>`;
  } else {
    for (let i = 0; i < todoList.length; i++) {
      let { item, dueDate } = todoList[i];
      newhtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button onclick="deleteTodo(${i})" class="delete-btn">Delete</button>
      `;
    }
  }

  containerElement.innerHTML = newhtml;
}
