<template>
  <div id="app">
    <PostBox />
    <Postlist :posts=this.$store.state.getPosts />
  </div>
</template>
<script src="https://www.gstatic.com/firebasejs/7.13.2"
<script>
import Postlist from './views/postList.vue'
import dbService from './plugins/dbService'
import PostBox from './components/PostBox.vue'
export default {
  name: 'App',
  components: {
    Postlist,
    PostBox,
  },
  data: () =>({
    posts: {}

  }),
  mounted(){
      this.$store.dispatch('getPosts')
      //.then(()=>{console.log(this.$store.state.getPosts);this.posts = this.$store.state.getPosts;})
      //this.posts = this.$store.state.getPosts;
  }
  
}
</script>