<template>
  <div class="container mt-5">
    <div class="card" id="form_container">
      <div class="card-body">
        <img src="/src/img/caritas-logo-300x106.png" class="img-fluid mb-4 mx-auto d-block" />
        <h1 class="card-title mb-4">Generador de Flyer</h1>
        <div class="mb-3">
          <label for="imageUpload" class="form-label">Selecciona una imagen:</label>
          <input id="imageUpload" type="file" @change="onFileChange" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="flyerText" class="form-label">Escribe un texto:</label>
          <input
            id="flyerText"
            type="text"
            v-model="text"
            placeholder="Digite el texto a mostrar"
            class="form-control"
          />
        </div>
        <button @click="uploadFlyer" class="btn btn-primary">Generar Flyer</button>
      </div>
    </div>
  </div>
</template>

<script>
import { database } from '@/firebaseConfig'
import { ref, set } from 'firebase/database'

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
    async uploadFlyer() {
      const flyerData = {
        image: this.image,
        text: this.text
      }
      await set(ref(database, 'flyer'), flyerData)
      this.$emit('setFlyer', flyerData)
      this.$emit('navigate', 'ViewFlyer')
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  background-color: #e3dede;
  border-radius: 50px 0px 50px 0px;
}

#form_container {
  border-radius: 50px 0px 50px 0px;
  padding: 30px;
}
</style>
