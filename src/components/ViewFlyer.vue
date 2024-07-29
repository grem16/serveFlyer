<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-body text-center">
        <h1 class="card-title mb-4"></h1>
        <div v-if="flyerData.image">
          <img :src="flyerData.image" alt="Flyer Image" class="img-fluid mb-4" />
          <h2>{{ flyerData.text }}</h2>
        </div>
        <div v-else>
          <p>No flyer data available.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['flyerData']
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
