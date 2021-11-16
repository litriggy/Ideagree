<template>
<div>
    <Post 
    v-for="post in posts" 
      v-bind:key="post.id"
      v-bind:id="post.key"
      v-bind:author="post.id" 
      v-bind:like="post.like"
      v-bind:date="post.timestamp" 
      v-bind:msg="post.content"
      v-bind:comments="post.comments" />
      </div>
</template>


<script>
import Post from '../components/PostContainer'


export default {

    components:{
        Post
    },
    props: {
        posts: Array,
    },
    mounted(){
        //console.log(this.posts)
    }
}
</script>
