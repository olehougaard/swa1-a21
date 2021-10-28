function bound_property(value) {
    const bound = []

    const get = () => value

    const set = v => {
        if (v !== get()) {
            value = v
            bound.forEach(property => property.set(v))
        }
    }

    const single_bind = property => {
        property.set(get())
        bound.push(property)
    }

    const double_bind = property => {
        single_bind(property)
        property.single_bind({ set })
    }

    return { get, set, single_bind, double_bind }
}

bound_property.from_attribute = (o, att, addListener) => {
    const get = () => o[att]

    const set = v => {
        if (v !== get()) o[att] = v
    }

    const single_bind = property => {
        property.set(get())
        addListener(() => property.set(get()))
    }

    const double_bind = property => {
        single_bind(property)
        property.single_bind({ set })
    }

    return { get, set, single_bind, double_bind}
}

export default bound_property