<template>
  <table>
      <thead><tr><td>Id</td><td>Name</td><td>Employee id</td><td>Salary</td><td>Manager</td></tr></thead>
      <tbody>
          <tr v-for="p in persons" :key="p.id">
              <td>{{ p.id }} </td>
              <td>{{ p.name }} </td>
              <template v-if="p.employeeId">
                  <td>{{ p.employeeId }}</td>
                  <td>{{ p.salary || 0 }}</td>
                  <td>{{ Boolean(p.manager) }}</td>
              </template>
              <template v-else>
                  <td colspan = "3"><button v-on:click="hire(p)">Hire</button></td>
              </template>
          </tr>
      </tbody>
  </table>
</template>

<script>
export default {
  emits: ['hire'],
  name: "Personnel",
  props: {
    persons: Array
  },
  methods: {
    hire(p) {
      this.$emit('hire', p)
    }
  }
}
</script>