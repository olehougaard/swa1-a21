function Point(x, y) {
    function getX() {
        return x
    }

    const getY = function() {
        return y
    }

    const moveTo = function(_x, _y) {
        x = _x
        y = _y
    }

    const toString = () => `({x}, {y})`

    const copy = () => Point(x, y)

    return {
        getX,
        getY,
        moveTo,
        toString,
        copy
    }
}

function Circle(arg1, arg2, arg3) {
    let center, radius
    if (arg3 === undefined) {
        center = arg1.copy()
        radius = arg2
    } else {
        center = Point(x, y)
        radius = arg3
    }
    const getCenter = () => center.copy()
    const getRadius = () => radius
    function moveTo(x, y) {
        center.moveTo(x, y)
    }
    const toString = () => `center: {center.toString}, radius: {radius}`

    return {
        getCenter,
        getRadius,
        moveTo,
        toString
    }
}

let p = Point(20, 30, 40)
console.log(p.getY())

// Polymorphic?
function moveThis(o, x, y) {
    o.moveTo(x, y)
}
