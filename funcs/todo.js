const todoBox = document.querySelector(".todos");
const todoInput = todoBox.querySelector("input");
const saveBtn = todoBox.querySelector(".saveBtn");
const todoList = todoBox.querySelector(".todoList");

let todoArr = [];

const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todoArr));
};

const deleteTodos = (e) => {
  const li = e.target.parentElement;
  li.remove();
  todoArr = todoArr.filter((todos) => todos.id !== parseInt(li.id));
  saveTodos();
};

const putTodos = (todo) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = todo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodos);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
};

const submitTodo = (e) => {
  e.preventDefault();
  const todo = todoInput.value;
  todoInput.value = "";
  const todoObj = {
    text: todo,
    id: Date.now(),
  };

  if (todo === "") {
    alert("아무것도 없어요!");
  } else {
    todoArr.push(todoObj);
    putTodos(todoObj);
    saveTodos();
  }
};

saveBtn.addEventListener("click", submitTodo);

const getTodos = localStorage.getItem("todos");

if (getTodos !== null) {
  const parsedTodos = JSON.parse(getTodos);
  todoArr = parsedTodos;
  parsedTodos.forEach(putTodos);
}
