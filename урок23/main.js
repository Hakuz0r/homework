// 1 задание

for (i = 1; i <= 20; i++) {
  if (i % 4 == 0) {
    console.log(`Число ${i}, делится без остатка на 4`);
  }
}

// 2 задание

const number = +prompt("Введите число: ");
let factorial = 1;

for (i = 1; i <= number; i++) {
  factorial = factorial * i;
}
console.log(factorial);

// 3 задание

let board = "";

for (let i = 1; i <= 8; i++) {
  let row = "";
  for (let j = 8; j > 0; j--) {
    if ((i + j) % 2) {
      row += "Ч ";
    } else {
      row += "Б ";
    }
  }
  board += row + "\n";
}
console.log(board)
