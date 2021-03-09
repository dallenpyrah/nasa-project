<template>
  <div class="col-4 card shadow-lg p-4 text-center">
      <div class="p-3 m-2 badge-dark rounded">
        <h3>Image Title</h3>
        <h6>{{state.pictureOfDay.title}}</h6>
      </div>
        <iframe :src="state.pictureOfDay.url" frameborder="0"></iframe>
      <div class="badge-dark rounded p-1 m-2">
        <p>Image Date</p>
        <p>{{state.pictureOfDay.date}}</p>
      </div>
        <button class="btn button-blue text-light" @click="getPicture()">Get Picture</button>
      </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from 'vue'
import { AppState } from '../AppState'
import { picturesService } from '../services/PicturesService'

export default {
  name: 'Picture',
  props: {
    picture: Object
  },
  setup() {
    const state = reactive({
      pictureOfDay: computed(() => AppState.pictureOfDay)
    })
    return {
      state,
      async getPicture() {
        try {
          await picturesService.getPicture()
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
  componenets: {

  }
}
</script>

<style scoped>
.button-blue{
  background-color: rgb(86, 145, 255);
}
</style>
