<template>
  <div id="app">
    <fomrulario />
  </div>
</template>

<script>
import Form from './components/FormularioValidaciones.vue'

export default {
  name: 'App',
  components: {
    'fomrulario': Form
  }
}
</script>

<style>
#app{
  height: 100vh;
  background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(52,73,94,1) 0%, rgba(65,184,131,1) 100%);
}
</style>
