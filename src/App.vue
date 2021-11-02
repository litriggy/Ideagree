<template>
  <div id="app">
    <PostContainer author="이상훈" date="2020년 전" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import PostContainer from './components/PostContainer.vue'

export default {
  name: 'App',
  components: {
    PostContainer
  }
}
</script>

<style>

</style>
