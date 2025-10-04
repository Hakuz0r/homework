// 1 задание

const num = 2;

if (num % 2 == 0) {
  console.log("Число четное!");
} else {
  console.log("Число нечетное!");
}

// Задание 2

const age = +prompt("Введите возраст:", 0);

// let discount = (age < 18) ? "Скидка 10%" : (age >= 18 && age <= 65) ? "Скидка 20%" : (age > 65) ? "Скидка 30%" : 'Нет скидки';
let discount;

switch (true) {
  case age < 18:
    discount = "Скидка 10%";
    break;
  case age >= 18 && age <= 65:
    discount = "Скидка 20%";
    break;
  case age > 65:
    discount = "Скидка 30%";
    break;а
  default:
    discount = "Скидки нет!";
}
alert(discount);

// Задание 3
const username = prompt("Ваше Имя:");
const password = prompt("Ваш пароль:");

if ((username == "admin" || username == "user") && password == "123456") {
  alert("Доступ разрешен");
} else {
  alert("Доступ запрещен!");
}

// Задание 4

const weight = prompt("Вес доставки:");
const typeDel = prompt("Тип доставки:");

switch (true) {
  case weight <= 0:
    alert("Некорректный вес поссылки");
    break;
  case typeDel != "Стандарт" && typeDel != "Экспресс" && typeDel != "Премиум":
    alert("Неверный тип доставки");
    break;
}

const sum = weight < 1 ? 5 : weight >= 1 && weight <= 5 ? 10: weight > 5 ? 15 : "";

switch (true) {
  case typeDel == "Стандарт":
    finalPrice = sum * 1;
    break;
  case typeDel == "Экспресс":
    finalPrice = sum * 1.5;
    break;
  case typeDel == "Премиум":
    finalPrice = sum * 2;
    break;
}
alert(finalPrice + " Баксов");
