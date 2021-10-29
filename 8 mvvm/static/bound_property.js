function bound_property({ getValue, setValue }) {
    const bound = []
    
    const notify = () => bound.forEach((property) => property.set(getValue())) 

    const get = getValue

    const set = v => {
        if (v !== get()) {
            setValue(v)
            notify()
        }
    }

    // Requires an object with a set method. Calls the set method whenever this propery changes.
    const single_bind = (property) => {
        property.set(getValue())
        bound.push(property)
    }

    // Requires a property with at least set and single_bind
    const double_bind = (property) => {
        single_bind(property)
        property.single_bind({ set })
    }

    return { get, set, single_bind, double_bind, notify }
}

bound_property.create_initialized = (value) => bound_property({
    getValue: () => value,
    setValue: v => value = v
})

bound_property.computed = (property, compute_get, compute_set) => {
    const computed = bound_property({
        getValue: () => compute_get(property.get()),
        setValue: v => property.set(compute_set(v))
    })
    property.single_bind({set: _ => computed.notify()})
    if (typeof compute_set !== 'function') {
        delete computed.set
        delete computed.double_bind
    }
    return computed
}

// Creates a bound property from an attribute on an element
// element - the HTML element in question
// attribute - the attribute that should be bound
// addListener - a function that adds a listener that responds to changes in the element
bound_property.from_attribute = (element, attribute, addListener) => {
    const property = bound_property({
        getValue: () => element[attribute],
        setValue: v => element[attribute] = v
    })

    addListener(() => property.notify())

    return property
}

export default bound_property