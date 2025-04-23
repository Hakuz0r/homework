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
        name: 'Artem',
        age: 23,
        isAdmin: true
    },
    {
        name: 'Dana',
        age: 21,
        isAdmin: true
    },
    {
        name: 'Nina',
        age: 71,
        isAdmin: true
    },
    {
        name: 'Maksim',
        age: 26,
        isAdmin: true
    },
    {
        name: 'Dasha',
        age: 20,
        isAdmin: false
    },
    {
        name: 'Katya',
        age: 21,
        isAdmin: false
    }
]
const notAdmin = []
for(let i = 0; i < users.length; i++) {
    if(!users[i].isAdmin) {
        notAdmin.push(users[i])
    }
}
console.log(notAdmin.length)



