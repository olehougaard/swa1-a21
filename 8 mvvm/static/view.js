import bound_property from "./bound_property.js"

export default (window, viewmodel) => {
    const document = window.document
    const table_body = document.getElementById('employee_data')
    const salary = document.getElementById('salary')

    viewmodel.bindSalary(bound_property.from_attribute(salary, 'value', l => salary.addEventListener('change', l)))

    const personRow = p => {
        const tr = document.createElement('tr')
        tr.insertCell().append(p.id)
        tr.insertCell().append(p.name)
        if (p.employeeId) {
            tr.insertCell().append(p.employeeId)
            tr.insertCell().append(p.salary ?? 0)
            tr.insertCell().append(Boolean(p.manager))
        } else {
            const button = tr.insertCell().appendChild(document.createElement('button'))
            button.append("Hire")
            button.onclick = () => {
                viewmodel.hire(p.id)
            }
            tr.insertCell()
            tr.insertCell()
        }
        return tr
    }

    const update = persons => {
        table_body.replaceChildren(...persons.map(personRow))
    }

    viewmodel.bindPersonData({ set: update })
}
