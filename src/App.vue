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
    posts:[]
  }),
  mounted(){
   // console.log(this.$firebase)
    dbService.getPosts()
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        this.posts = snapshot.val()


      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  },
  methods:{
    read () {

      }
    /*onDataChange(items) {
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
    },*/
    }
  
}
</script>