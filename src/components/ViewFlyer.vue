<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-body text-center">
        <img
          src="/src/img/caritas-logo-300x106.png"
          class="img-fluid w-25 top-0 end-0"
          id="logo_sup"
        />
        <!-- <h1 class="card-title mb-4">Your Flyer</h1> -->
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
.card {
  padding: 5px 30px 30px;
}
#logo_sup {
  margin-bottom: 15px;
}
</style>
