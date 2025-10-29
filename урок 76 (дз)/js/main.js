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
    [todoKeys.text]: text,
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

// При помощи метода querySelector получаем элементы .form, .input и .todos
// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки
// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement

const form = document.querySelector(".form");
const input = document.querySelector(".input");

form.addEventListener("submit", event => {
  event.preventDefault();
  const value = input.value;
  handleCreateTodo(todos, value);
  input.value = "";
});
const ul = document.querySelector(".todos-list");

const createTodoElement = todo => {
  const li = document.createElement("li");
  li.classList.add("todo-item");
  li.dataset.id = todo.id;

  const div1 = document.createElement("div");
  div1.classList.add("todo-text");
  div1.textContent = todo.text;
  li.append(div1);

  const div2 = document.createElement("div");
  div2.classList.add("todo-actions");

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("button-complete", "button");
  completeBtn.innerHTML = `&#10004;`;
  completeBtn.addEventListener("click", even => {
    even.target;
    const complete = completeBtn.closest("li");
    const completeId = complete.dataset.id;
    if (!todo.is_completed) {
      li.classList.add("complete-todo");
    } else {
      li.classList.remove("complete-todo");
    }
    completeTodoById(todos, Number(completeId));
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("button-delete", "button");
  deleteBtn.innerHTML = `&#10006;`;

  div2.append(completeBtn);
  div2.append(deleteBtn);
  li.append(div2);
  ul.append(li);
};

// const deleteTodo = todo => {
//   const deleteBtn = document.querySelector(".button-delete");
// };

const handleCreateTodo = (todos, text) => {
  const newTodo = createTodo(todos, text);
  createTodoElement(newTodo);
};
