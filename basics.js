// Methods
// Methods are functions as members of objects

const rect = {
    width: 100,
    height: 200,
    area: function() { return this.width * this.height }
}

console.log(rect.area())

// Java/C#:
// class Rectangle ...
//
// Rectangle rect = new Rectangle(100, 200);
// Calling constructor. 'this' refers to newly created Rectangle object
//
// rect.area() // 'this' refers to recepient: rect

// JavaScript:
// Same, but ... dynamic

//Problem:
let rectArea = rect.area
// Has no context:
console.log(rectArea())

// The *call* decides the context - not the object or function

// Solutions:
// 1 - Use call()
console.log(rectArea.call(rect))

// 2 - Use bind()
rectArea = rect.area.bind(rect)
console.log(rectArea())

// button.onclick = rect.area

// 3 - Use anonymous function
rectArea = () => rect.area()
// button.onclick = () => rect.area()

// 4 - don't use this
