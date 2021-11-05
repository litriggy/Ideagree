<template>
  <div id="app">
    <PostContainer 
      v-for="post in posts" 
      v-bind:key="post.id"
      v-bind:id="post.id"
      v-bind:author="post.author" 
      v-bind:like="post.likes"
      date="20년 전" 
      v-bind:msg="post.title"
      v-bind:comments="post.comments" 
    />
  </div>
</template>
<script>
import PostContainer from './components/PostContainer.vue'
export default {
  name: 'App',
  components: {
    PostContainer
  },
  data: function() {
    return{
      posts: [
        { id: "1", title: 'My journey with Vue', author:'이상훈', likes:5, comments: [
                { id: 1, title: 'Lorem', author:'이상훈', likes:5 },
                { id: 2, title: 'Ipsum', author:'이상훈', likes:5  },
                { id: 3, title: 'Dolce', author:'이상훈', likes:5  }
            ]
        },
        { id: "2", title: 'Blogging with Vue', author:'이상훈', likes:5  },
        { id: "3", title: 'Why Vue is so fun', author:'이상훈', likes:5  , comments: [
                { id: 1, title: 'Lorem', author:'이상훈', likes:5 },
                { id: 2, title: 'Ipsum', author:'이상훈', likes:5  },
                { id: 3, title: 'Dolce', author:'이상훈', likes:5  }
            ]}
      ]
    }
  }
}
</script>