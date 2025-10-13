// 1 задание

const person = {
    name: "Artem",
    surname: "Zubov",
    age: "23",
}

// console.log(person)

// 2 задание

const object = {
    name: "Artem"
}

function isEmpty (object) {
    const length = Object.keys(object);
    if (length.length === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEmpty(object));

// ========= //

const obj = {
    name: "Artem",
    key: "123"

}

function isEmpty (object) {
    for (let key in object) {
        return true;
    } 
    return false;
}
console.log(isEmpty(obj))


// 3 задание

const task = {
    title: 'title',
    description: 'description',
    isCompleted: true,
}

function cloneAndModify(object1, object2) {
    const objects = { ...object1, ...object2  } 
    for (object1 in object2) {
        return objects; 
    }  
}

console.log(cloneAndModify(obj, task)) 

// 4 задание 

const myObject = {
    method1() {
        console.log("Метод 1 вызван")
    },
    method2() {
        console.log("Метод 2 вызван")
    },
    property: "Это не метод",
}

const callAllMethods = (object) => {
    for (let method in object) {
        if (typeof object[method] === 'function') {
            object[method]();
        }
    }   
}
callAllMethods(myObject);

