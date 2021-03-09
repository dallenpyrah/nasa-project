<template>
  <div class="col-4 card shadow-lg p-3 text-center">
        <form @submit.prevent="searchPicture()">
          <i class="fa fa-globe text-primary fa-3x p-3" aria-hidden="true"></i>
          <input type="text" class="p-3" placeholder="Search for a fact..." v-model="state.query">
          <button type="sumbit" class="btn button-blue p-3 text-light ml-2">Search</button>
        </form>
        <div class="card bg-dark text-light shadow-lg mt-4">
        <h3 class="p-3"><i class="fa fa-globe fa-3x m-3 p-4" aria-hidden="true"></i>{{state.searchPicture.title}}</h3>
        <h6 class="p-3">{{state.searchPicture.description}}</h6>
        </div>
      </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from 'vue'
import { AppState } from '../AppState'
import { picturesService } from '../services/PicturesService'

export default {
  setup() {
    const state = reactive({
      query: '',
      searchPicture: computed(() => AppState.searchPicture)
    })
    return {
      state,
      async searchPicture() {
        try {
          await picturesService.searchPictures(state.query)
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
}
</script>

<style>
.button-blue{
  background-color: rgb(86, 145, 255);
}
</style>
