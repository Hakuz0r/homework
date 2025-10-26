"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  isCompleted: "isCompleted",
};

const todo = [];

// счетчик id

const getNewToDo = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

// вывод ошибки в переменную
const logError = id => {
  return console.error(`todo with id ${id} not found`);
};

// Добавление задачи

const createTodo = (object, text) => {
  const newTodo = {
    [todoKeys.id]: getNewToDo(object),
    [todoKeys.text]: text,
    [todoKeys.isCompleted]: false,
  };
  object.push(newTodo);
  return newTodo;
};

// Выполненик задачи

const completedTodoById = (todos, id) => {
  let todo = todos.find(todo => todo[todoKeys.id] === id);
  if (todo === undefined) {
    logError(id);
  } else {
    todo[todoKeys.isCompleted] = !todo[todoKeys.isCompleted];
    return todo;
  }
};

// Удаление задачи

const deleteTodoById = (todos, id) => {
  const findIndex = todos.findIndex(todo => todo[todoKeys.id] === id);
  if (findIndex == -1) {
    logError(id);
    return todos;
  } else {
    todos.splice(findIndex, 1);
    return todos;
  }
};

// Изменение задачи

const editTodo = (todos, id, text) => {
  const editText = todos.find(todo => todo[todoKeys.id] === id);
  if (!editText) {
    logError(id);
    return todos;
  } else {
    editText[todoKeys.text] = text;
    return todos;
  }
};

// Описание задачи

const descriptionTodo = (todos, id, description) => {
  const descTodo = todos.find(todo => todo[todoKeys.id] === id);
  if (!descTodo) {
    logError(id);
    return todos;
  } else {
    descTodo.description = description;
    return todos;
  }
};

// удаление описания

const delDescTodo = (todos, id) => {
  const delDesc = todos.findIndex(todo => todo[todoKeys.id] === id);
  if (delDesc === -1) {
    logError(id);
    return todos;
  } else {
    delete todos[delDesc].description;
    return todos;
  }
};

// Дедлайн

const deadlineToDo = (todos, id, deadline) => {
  const time = todos.find(todo => todo[todoKeys.id] === id);
  if (!time) {
    logError(id);
    return todos;
  } else {
    time.deadline = deadline;
    return todos;
  }
};

// удаление дедлайна

const deleteDeadLineToDo = (todos, id) => {
  const deleteDeadLine = todos.findIndex(todo => todo[todoKeys.id] === id);
  if (deleteDeadLine == -1) {
    logError(id);
    return todos;
  } else {
    delete todos[deleteDeadLine].deadline;
    return todos;
  }
};
