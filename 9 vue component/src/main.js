import Vue from 'vue'
import App from './App.vue'
import model from './model.js'

Vue.config.productionTip = false
Vue.prototype.$window = window

async function getData() {
  const person_res = await fetch('http://localhost:9090/persons')
  const persons = await person_res.json()
  const employees = await fetch('http://localhost:9090/employees').then(res => res.json())
  return model(persons, employees)
}

getData()
.then(model => {
  const constr = Vue.extend(App)
  const vm = new constr()
  
  vm.model = model
  
  vm.$mount('#app')
})
