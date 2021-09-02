function f(x) {
    const y = 8
    function g() {
        // x and y are in the scope of g
        return x + y
    }
    return g
}

let h = f(3)
console.log(h)
console.log(h())
let h_ = f(4)
console.log(h())
console.log(h_())

function sequence(x) {
    function next() {
        x++
        return x
    }
    return next
}

let s = sequence(7)
console.log(s())
console.log(s())
console.log(s())

function seqObj(x) {
    function next() {
        x++
        return x
    }
    return { next: next }
}

s = seqObj(7)
console.log(s.next())
console.log(s.next())
console.log(s.next())
