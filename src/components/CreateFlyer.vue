<template>  
  <div class="container mt-5">
    <div class="card">
      <div class="card-body">
        <img src="/src/img/caritas-logo-300x106.png" class="img-fluid mb-4 mx-auto d-block" />
        <h1 class="card-title mb-4">Generador de Flyer</h1>
        <div class="mb-3">
          <label for="imageUpload" class="form-label">Seleccione una imagen:</label>
          <input id="imageUpload" type="file" @change="onFileChange" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="flyerText" class="form-label">Texto a mostrar:</label>
          <input
            id="flyerText"
            type="text"
            v-model="text"
            placeholder="Digite texto a mostrar en el flyer"
            class="form-control"
          />
        </div>
        <button @click="createFlyer" class="btn btn-primary">Crear Flyer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: null,
      text: ''
    }
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.image = e.target.result
        }
        reader.readAsDataURL(file)
      }
    },
    createFlyer() {
      const flyerData = {
        image: this.image,
        text: this.text
      }
      this.$emit('set-flyer', flyerData)
      this.$emit('navigate', 'ViewFlyer')
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}
</style>
