import { todoKeys } from "./constants.js";
import { createTodo, completeTodoById, deleteTodoById } from "./service.js"
import { setTodosToLocalStorage } from "./storage.js";

const formElement = document.querySelector(".form");
const inputElement = document.querySelector(".input");
const ulElement = document.querySelector(".todos-list");

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
  return li;
};

export const renderTodos = (todos) => {
    ulElement.innerHTML = "";
  todos.forEach(todo => {
    const todoElement = createTodoElement(todo);
    if (todo[todoKeys.is_completed]) {
      todoElement.classList.toggle("complete-todo");
    }
    if (!todoElement) return;
    ulElement.append(todoElement);
  });
};

const handleCreateTodo = (todos, text) => {
  const newTodo = createTodo(todos, text);
  setTodosToLocalStorage(todos);
  createTodoElement(newTodo);
};

export const initTodoHandlers = todos => {
  ulElement.addEventListener("click", ({ target }) => {
    const todo = target.closest(".todo-item");
    const button = target.closest(".button");
    if (!button) return;
    if (!todo) return;

    const todoId = Number(todo.dataset.id);
    if (target.matches(".button-complete")) {
      completeTodoById(todos, todoId);
      todo.classList.toggle("complete-todo");
    }

    if (target.matches(".button-delete")) {
      deleteTodoById(todos, todoId);
      todo.remove();
    }
    setTodosToLocalStorage(todos);
  });

  formElement.addEventListener("submit", event => {
    event.preventDefault();
    const value = inputElement.value.trim();
    if (!value) return;
    handleCreateTodo(todos, value);
    inputElement.value = "";
  });
};
