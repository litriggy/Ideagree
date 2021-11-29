<template>
    <div>
    <Post 
        v-for="(post, postID) in posts"
        v-bind:key="postID"
        v-bind:id="postID"
        v-bind:author="post.key" 
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
        posts: Object,
    },
    mounted(){
    },

}
</script>
