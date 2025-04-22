function someName(name) {
    if(name === 'Artem') {
        return 'Hello ' + name + '!'
    }
}
console.log(someName('Artem'))

// -------------------------

const numbers = [1, 4, 8, 10, 13, 20]

function sumNumbers(number) {
    let result = []
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 10) {
            result.push(numbers[i])
        }
    }
    return result
}

console.log(sumNumbers())

// Вариант без функции

const numbers1 = [1, 2, 3, 10, 15, 30]

let result = []
for (i = 0; i < numbers1.length; i++ ) {
    if (numbers1[i] >= 10) {
        result.push(numbers1[i])
    }
}
console.log(result)

// ---------

function idk(num1, num2, op) {
    if (op === '-') {
        return num1 - num2
    }
    if (op === '+') {
        return num1 + num2
    }
    if (op === '*') {
        return num1 * num2
    }
    if (op === '/') {
        return num1 / num2
    }
}
console.log(idk(2, 3, '-'))
console.log(idk(2, 3, '+'))
console.log(idk(2, 3, '*'))
console.log(idk(4, 2, '/'))