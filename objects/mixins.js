// Mixin
function canine(state) {
    function bark() {
        console.log(`Woof! I'm a dog called {state.name}`)
    }

    return {bark}
}

// Mixin
function robot(state) {
    function drive() {
        console.log(`Drive at {state.speed} KPH`)
    }
    return {drive}
}

// Factory function
function robotDog(name, speed, age) {
    const state = {name, speed, age, kind: 'Robot dog'}
    const canineNature = canine(state)
    const robotNature = robot(state)
    function getAge() { return state.age }
    return { ...canineNature, ...robotNature, getAge }
}
