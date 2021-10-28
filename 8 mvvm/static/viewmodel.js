import bound_property from "./bound_property.js"

export default (init_model) => {
  let model = init_model

  const salary = bound_property.create_initialized(0)
  const personData = bound_property.create_initialized(model.personData())
  
  const hire = async (id) => {
    if (salary.get() > 0) {
      const headers = { 'Content-Type': 'application/json', Accept: 'application/json' }
      const employee_res = await fetch('http://localhost:9090/employees', { method: 'POST', body: JSON.stringify({salary: salary.get(), manager:false}), headers })
      const employee = await employee_res.json()
      const { employeeId } = employee
      const person_res = await fetch('http://localhost:9090/persons/' + id, { method: 'PATCH', body: JSON.stringify({ employeeId }), headers })
      const person = await person_res.json()
      model = model.addEmployee(employee).updatePerson(person)
      personData.set(model.personData())
      salary.set(0)
    }  
  }  

  return { bindSalary: salary.double_bind, bindPersonData: personData.single_bind, hire, personData }
}
