<template>
  <div id="app">
    <Postlist :posts=posts />
  </div>
</template>
<script>
import Postlist from './views/postList.vue'
import { mapGetters } from 'vuex'
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
    console.log(this.$firebase)
    //this.$store.state.getPosts = 
    dbService.getPosts().on('value', this.onDataChange)


  },
  methods:{
    onDataChange(items) {
      let _posts = [];
      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _posts.push({
          key: key,
          title: data.title,
          description: data.description,
          published: data.published,
        });
      });
      this.posts = _posts;
    },
  }
}
</script>