const myInfo = {
    name: 'Artem',
    age: 23,
    colorHair: 'blond',
    sayHello(name) {
        return `Hello ${name}!`
    }
}
console.log(myInfo.sayHello('Artem'))

// ---------

const users = [
    {
        name: 'Dana',
        age: 21,
        isAdmin: true,
    },
    {
        name: 'Nina',
        age: 71,
        isAdmin: true
    },
    {
        name: 'Dasha',
        age: 20,
        isAdmin: false,
    },
    {
        name: 'Katya',
        age: 21,
        isAdmin: false,
    }
]
for(let i = 0; i < users.length; i++) {
    if(!users[i].isAdmin) {
        console.log(users[i].name)
    }    
}