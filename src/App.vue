<template>
  <div id="app">
    <component :is="currentView" :flyerData="flyerData" @setFlyer="setFlyer" />
  </div>
</template>

<script>
import CreateFlyer from './components/CreateFlyer.vue'
import ViewFlyer from './components/ViewFlyer.vue'

export default {
  data() {
    return {
      currentView: process.env.NODE_ENV === 'production' ? 'ViewFlyer' : 'CreateFlyer',
      flyerData: {
        image: null,
        text: ''
      }
    }
  },
  components: {
    CreateFlyer,
    ViewFlyer
  },
  methods: {
    setFlyer(data) {
      this.flyerData = data
      this.currentView = 'ViewFlyer'
    }
  }
}
</script>

<style>
/* Añade aquí tus estilos globales */
</style>
