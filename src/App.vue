<template>
<div class="app">
  <header class="container-fluid">
    <div class="row">
        <div class="col-12 bg-blue text-light text-left">
            <h3 class="p-2 mt-1">NASA <i class="fa fa-globe ml-2 text-light" aria-hidden="true"></i></h3>
        </div>
    </div>
  </header>
  <main class="container-fluid">
    <div class="row justify-content-around mt-5">
      <PictureOfDay />
      <SearchPicture />
    </div>
    <div class="row justify-content-center m-5">
      <div class="col-10 card bg-blue text-light">
        <h3 class="mt-2">New Information</h3>
        <div class="col-2 m-1 card text-dark">One</div>
        <div class="col-3 m-1 card text-dark">Two</div>
        <div class="col-4 m-1 card text-dark">Three</div>
        <div class="col-5 m-1 card text-dark">Four</div>
        <div class="col-6 m-1 card text-dark">Four</div>
        <div class="col-7 m-1 card text-dark">Four</div>
        <div class="col-8 m-1 card text-dark">Four</div>
        <div class="col-9 m-1 card text-dark">Four</div>
        <div class="col-10 m-1 card text-dark">Four</div>
        <div class="col-11 m-1 card text-dark">Four</div>
        <div class="col-12 m-1 card text-dark">Four</div>
      </div>
    </div>

  </main>
  <footer class="container-fluid">
    <div class="row">
      <div class="col-12 bg-blue text-light">
        <h6 class="p-2 mt-1">This is a NASA <i class="fa fa-globe ml-2 mr-2" aria-hidden="true"></i> project.</h6>
      </div>
    </div>
  </footer>
</div>
</template>

<script>

import PictureOfDay from './components/PictureOfDay'
import SearchPicture from './components/SearchPicture'

export default {
  name: 'App',
  components: {
    PictureOfDay,
    SearchPicture
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
  background-image: url('https://www.technocrazed.com/wp-content/uploads/2015/12/HD-Space-Wallpaper-For-Background-23.jpg');
}

.app {
 display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex-grow: 1;
}

.bg-blue{
  background-color: rgb(0, 0, 0);
}

.button-blue{
  background-color: rgb(86, 145, 255);
}
</style>
