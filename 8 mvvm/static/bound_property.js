function bound_property({ getValue, setValue }) {
    const bound = []
    
    const notify = () => bound.forEach(({ property, convert}) => property.set(convert(getValue()))) 

    const get = getValue

    const set = v => {
        if (v !== get()) {
            setValue(v)
            notify()
        }
    }

    // Requires an object with a set method. Calls the set method whenever this propery changes.
    const single_bind = (property, convert = x => x) => {
        property.set(convert(getValue()))
        bound.push({property, convert})
    }

    // Requires a property with at least set and single_bind
    const double_bind = (property, convert_to = x => x, convert_from = x => x) => {
        single_bind(property, convert_to)
        property.single_bind({ set }, convert_from)
    }

    return { get, set, single_bind, double_bind, notify }
}

bound_property.create_initialized = (value) => bound_property({
    getValue: () => value,
    setValue: v => value = v
})

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