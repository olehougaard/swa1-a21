<template>
  <div id="dynamic-component-demo" class="demo">
    <h1>People</h1>
    <personnel :persons='persons' @hire='hire'/>
    <div>Salary: <input v-model='salary' id='salary'></div>
  </div>
</template>

<script>
import Personnel from "@/components/Personnel"

export default {
  name: 'App',
  data() {
    return {
      model: {},
      salary: 0
    }
  },
  computed: {
    persons() { return this.model.personData() }
  },
  methods: {
    async hire({id}) {
      if (this.salary > 0) {
        const headers = { 'Content-Type': 'application/json', Accept: 'application/json' }
        const employee_res = await fetch('http://localhost:9090/employees', { method: 'POST', body: JSON.stringify({salary: this.salary, manager:false}), headers })
        const employee = await employee_res.json()
        const { employeeId } = employee
        const person_res = await fetch('http://localhost:9090/persons/' + id, { method: 'PATCH', body: JSON.stringify({ employeeId }), headers })
        const person = await person_res.json()
        this.model = this.model.addEmployee(employee).updatePerson(person)
        this.salary = 0
      }
    }  
  },
  components: {
    Personnel
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
