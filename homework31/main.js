// 1 задание
function calcFinalPrice(basePrice, percentDiscount, taxDeduction) {
  const discountPrice = basePrice - percentDiscount; // 90
  const taxRate = discountPrice * taxDeduction; // 18
  finalPrice = discountPrice + taxRate;
  return finalPrice;
}
console.log(calcFinalPrice(100, 10, 0.2));
console.log(calcFinalPrice(100, 10, 0));

// 2 задание
(function checkAccess(username, password) {
  if (username === "admin" && password === "123456") {
    console.log("Доступ разрешен");
    return;
  } else {
    console.log("Доступ запрещен");
    return;
  }
})("admin", "123456");

// 3 задание
const night = "Ночь";
const morning = "Утро";
const day = "День";
const evening = "Вечер";

const getTimeDay = timeDay => {
  if (timeDay >= 0 && timeDay <= 5) {
    console.log(night);
    return;
  } else if (timeDay >= 6 && timeDay <= 11) {
    console.log(morning);
    return;
  } else if (timeDay >= 12 && timeDay <= 17) {
    console.log(day);
    return;
  } else if (timeDay >= 18 && timeDay <= 23) {
    console.log(evening);
    return;
  } else {
    console.log("Неккоректное время");
  }
};
getTimeDay(25);

// 4 задание
function findStartEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      return `Первое четное число: ${i}`;
    }
  }
  return "Четных чисел нет!";
}
console.log(findStartEven(5, 10));
