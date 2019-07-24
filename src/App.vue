<template>
  <div id="app">
    <VueRegisterMemo></VueRegisterMemo>
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from 'vue-router'
import { firestorePlugin } from "vuefire";

Vue.use(firestorePlugin);
Vue.use(VueRouter)

import VueRegisterMemo from './components/VueRegisterMemo.vue'

export default {
  name: 'app',
  components: {
    VueRegisterMemo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
