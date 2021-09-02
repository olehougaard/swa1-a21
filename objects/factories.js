// Factory function
function sequence(x) {
    const originalX = x

    function next() {
        x++
        return x
    }

    function reset() {
        x = originalX
    }

    return {
        next : next,
        reset : reset
    }
}

let s = sequence(0)
console.log(s.next())
console.log(s.next())
console.log(s.next())

let n = s.next
console.log(n())
console.log(n())
console.log(n())
console.log(s.next())

/*
class Sequence {
    private int x;
    private int originalX;
  
    public Sequence(int x) {
        this.x = x;
        this.originalX = x;
    }

    public int next() {
        x++;
        return x;
    }

    public void reset() {
        x = originalX;
    }
}
*/

// Rules of factory functions
// Rule #1: The signature of the factory function should be the signature of the constructor
// Rule #2: The local variables that are not already in the signature should be local variables
// Rule #3: The methods should be functions
// Rule #4: The factory function must return an object with all the public members (usu. methods)

// Alternative syntax (syntactic sugar):
function sequence_(x) {
    const originalX = x

    function next() {
        x++
        return x
    }

    function reset() {
        x = originalX
    }

    return {
        next,
        reset
    }
}

function sequence__(x) {
    const originalX = x

    return {
        next () {
            x++
            return x
        },
        reset() {
            x = originalX
        }
    }
}

