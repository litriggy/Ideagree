<template>
  <div id="app">
    <Postlist :posts=posts />
  </div>
</template>
<script src="https://www.gstatic.com/firebasejs/7.13.2"
<script>
import Postlist from './views/postList.vue'
import dbService from './plugins/dbService'
export default {
  name: 'App',
  components: {
    Postlist
  },
  data: () =>({
    posts: []

  }),
  mounted(){
      this.$store.dispatch('getPosts')
      .then((list)=>{this.posts = list})
  }
  
}
</script>