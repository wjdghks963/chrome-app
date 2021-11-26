const todoBox = document.querySelector(".todos");
const todoInput = todoBox.querySelector("input");
const saveBtn = todoBox.querySelector(".saveBtn");
const todoList = todoBox.querySelector(".todoList");

const putTodos = (todo) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  todoList.appendChild(li);
  span.innerText = todo;
};

const submitTodo = (e) => {
  e.preventDefault();
  const todo = todoInput.value;
  todoInput.value = "";

  putTodos(todo);
};

saveBtn.addEventListener("click", submitTodo);
