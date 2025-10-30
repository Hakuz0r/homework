"use strick";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`;

const getNewTodoId = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text.trim(),
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};



const formElement = document.querySelector(".form");
const inputElement = document.querySelector(".input");
const ulElement = document.querySelector(".todos-list");

ulElement.addEventListener("click", ({target}) => {
  const todo = target.closest(".todo-item");
  if (!todo) return;
  
  const todoId = Number(todo.dataset.id)
  if (target.matches(".button-complete")) {
    completeTodoById(todos, todoId);
    todo.classList.toggle("complete-todo");
  }

  if (target.matches(".button-delete")) {
    deleteTodoById(todos, todoId);
    todo.remove();
  }
});

formElement.addEventListener("submit", event => {
  event.preventDefault();
  const value = inputElement.value.trim();
  if (!value) return;
  handleCreateTodo(todos, value);
  inputElement.value = "";
});

const createTodoElement = todo => {
  const li = document.createElement("li");
  li.classList.add("todo-item");
  li.dataset.id = todo[todoKeys.id];

  const div1 = document.createElement("div");
  div1.classList.add("todo-text");
  div1.textContent = todo.text;
  li.append(div1);

  const div2 = document.createElement("div");
  div2.classList.add("todo-actions");

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("button-complete", "button");
  completeBtn.innerHTML = `&#10004;`;
  // completeBtn.addEventListener("click", event => {
  //   event.target;
  //   const complete = completeBtn.closest("li");
  //   const completeId = complete.dataset.id;
  //   if (!todo.is_completed) {
  //     li.classList.add("complete-todo");
  //   } else {
  //     li.classList.remove("complete-todo");
  //   }
  //   completeTodoById(todos, Number(completeId));
  // });

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("button-delete", "button");
  deleteBtn.innerHTML = `&#10006;`;
  // deleteBtn.addEventListener("click", () => {
  //   const deleteTodo = deleteBtn.closest("li");
  //   const deleteId = Number(deleteTodo.dataset.id);
  //   deleteTodoById(todos, deleteId);
  //   deleteTodo.remove();
  // });

  div2.append(completeBtn);
  div2.append(deleteBtn);
  li.append(div2);
  ulElement.append(li);
};

const handleCreateTodo = (todos, text) => {
  const newTodo = createTodo(todos, text);
  createTodoElement(newTodo);
};
