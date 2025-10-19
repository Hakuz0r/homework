// Задание 1

const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Artem", age: 23, isAdmin: true },
  { name: "Alon", age: 25, isAdmin: false },
  { name: "Bob", age: 35, isAdmin: false },
];

const newUsers = [
  { name: "Dana", age: 21, isAdmin: true },
  { name: "Ann", age: 31, isAdmin: false },
];

users.push(newUsers[0], newUsers[1]);
// users.push(newUsers);

console.log(users);

// Задание 2
function getUserAverageAge(users) {
  let sum = 0;
  for (let i = 0; i < users.length; i++) {
    sum += users[i].age / users.length;
  }
  return sum;
}

console.log(getUserAverageAge(users));

// Задание 3

function getAllAdmins(users) {
  let admin = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin == true) {
      admin.push(users[i].name);
    }
  }
  return admin;
}

console.log(getAllAdmins(users));

// Задание 4

const array = [1, 2, 3, 4, 5];

function getFirstElements(arr, n) {
  let newArray = [];
  if (n === 0) {
    return [];
  }
  if (n === undefined) {
    newArray.push(arr[0]);
    return newArray;
  }
  if (n > arr.length) {
    return `Число ${n} больше массива: ${arr}`;
  }
  for (let i = 0; i < n; i++) {
    newArray.push(arr[i]);
  }
  return newArray;
}

console.log(getFirstElements(array, 6));
