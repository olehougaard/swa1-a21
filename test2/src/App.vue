<template>
  <div id="dynamic-component-demo" class="demo">
    <h1>People</h1>
    <personnel :persons='persons' @hire='hire'/>
  </div>
</template>

<script>
import Personnel from "@/components/Personnel"

export default {
  name: 'App',
  data() {
    return {
      persons: [{id: 1, name: "Joe"}, {id: 2, name:"Liz", employeeId: 17}]
    }
  },
  methods: {
    hire({id}) {
      this.$window.alert('id ' + id)
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
