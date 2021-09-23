// Higher-order functions

const pets = [
    {type: 'dog', name:'Fido', age: 7}, 
    {type: 'cat', name: 'Hannibal', age: 2}, 
    {type: 'dog', name: 'Rover', age: 3},
    {type: 'dragon', name: 'Fluffykins', age: 673}]

const types = (ps) => {
    let result = []
    for (pet of ps) {
        result.push(pet.type)
    }
    return result
}

const names = (ps) => {
    let result = []
    for (pet of ps) {
        result.push(pet.name)
    }
    return result
}

const map = (ps, f) => {
    let result = []
    for (pet of ps) {
        result.push(f(pet))
    }
    return result
}

const names2 = ps => map(ps, pet => pet.name)
const types2 = ps => map(ps, pet => pet.type)

const names3 = ps => ps.map(pet => pet.name)
const types3 = ps => ps.map(pet => pet.type)

const dogs = ps => ps.filter(pet => pet.type === 'dog')

const namesOfDogs = ps => ps.filter(pet => pet.type === 'dog').map(pet => pet.name)

console.log(types(pets))
console.log(names(pets))

const numbers = [ 3, 7, 2, 88]

const sum = a => {
    let s = 0
    for(n of a) {
        s = s + n
    }
    return s
}

const product = a => {
    let s = 1
    for(n of a) {
        s = s * n
    }
    return s
}

const reduce = (a, f, init_value) => {
    let s = init_value
    for(n of a) {
        s = f(s, n)
    }
    return s
}

console.log(reduce(numbers, (s, n) => s + n, 0))
console.log(numbers.reduce((s, n) => s + n, 0))

console.log(pets.map(p => p.age).reduce((s, n) => s + n) / pets.length)

// Currying
const hypotenuse = (a, b) => Math.sqrt(a * a + b * b)
const as = [2, 4, 8.9378]
const a = 3.234

// Not currying way
console.log(as.map(b => hypotenuse
(a, b)))

/*
function hypo(a) {
    return function(b) {
        return Math.sqrt(a * a + b * b)
    }
}
*/

const hypo = a => b => Math.sqrt(a * a + b * b)

const h = hypo(3)
console.log(h(4))

// Currying way
console.log(as.map(hypo(a)))
