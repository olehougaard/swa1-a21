export default function bound_property(value) {
    const bindings = []

    const single_bind = (object, property) => {
        object[property] = value
        bindings.push({object, property})
    }

    const double_bind = (object, property, addListener) => {
      single_bind(object, property)
      addListener(_ => {if (value !== object[property]) value = object[property]})
    }

    const get = () => value
    
    const set = v => {
        if (value !== v) {
            value = v
            bindings.forEach(({object, property}) => object[property] = v)
        }
    }

    const read_only = () => { single_bind, get }
    
    return { single_bind, double_bind, get, set, read_only}
}
