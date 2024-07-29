<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-body text-center">
        <h1 class="card-title mb-4">Your Flyer</h1>
        <div v-if="flyer.image">
          <img :src="flyer.image" alt="Flyer Image" class="img-fluid mb-4 mx-auto d-block" />
          <h2>{{ flyer.text }}</h2>
        </div>
        <div v-else>
          <p>No flyer data available.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { database } from '@/firebaseConfig'
import { ref, onValue } from 'firebase/database'

export default {
  data() {
    return {
      flyer: {}
    }
  },
  created() {
    const flyerRef = ref(database, 'flyer')
    onValue(flyerRef, (snapshot) => {
      this.flyer = snapshot.val()
    })
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>
