function bound_property(value) {
    const bound = []

    const get = () => value

    const set = v => {
        if (v !== get()) {
            value = v
            bound.forEach(property => property.set(v))
        }
    }

    // Requires an object with a set method. Calls the set method whenever this propery changes.
    const single_bind = property => {
        property.set(get())
        bound.push(property)
    }

    // Requires a property with at least set and single_bind
    const double_bind = property => {
        single_bind(property)
        property.single_bind({ set })
    }

    return { get, set, single_bind, double_bind }
}

// Creates a bound property from an attribute on an element
// element - the HTML element in question
// attribute - the attribute that should be bound
// addListener - a function that adds a listener that responds to changes in the element
bound_property.from_attribute = (element, attribute, addListener) => {
    const get = () => element[attribute]

    const set = v => {
        if (v !== get()) element[attribute] = v
    }

    // Requires an object with a set method. Calls the set method whenever this propery changes.
    const single_bind = property => {
        property.set(get())
        addListener(() => property.set(get()))
    }

    // Requires a property with at least set and single_bind
    const double_bind = property => {
        single_bind(property)
        property.single_bind({ set })
    }

    return { get, set, single_bind, double_bind}
}

export default bound_property