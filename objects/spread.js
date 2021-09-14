// Spread operator: Use ... to stand for 
// the rest of the object/array/parameters

function firstAndRest(first, ...rest) {
    console.log('first: ', first)
    console.log('rest: ', rest)
}

firstAndRest(0, 1, 2, 3)

const first = 0
const rest = [1, 2, 3]
const all = [ first, ...rest] // [0, 1, 2, 3]
// [first, rest] === [0, [1, 2, 3]]

const o = { a: 7, b: 'Thirtyfour'}
const o2 = { ...o, c: 'Dog'} // { a: 7, b: 'Thirtyfour', c: 'Dog'}
// { ...o, b: 'Dog' } === { a: 7, b: 'Dog' }

// Destructuring
let {a, b} = o
// Shorthand for
// let a = o.a
// let b = o.b

let { a, ...o3} = o2











