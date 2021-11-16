<template>
    <div class="container">
        <div class="vote-container">
            <ifas class="vote-icon" icon="sort-up" @click="upvote(id)"/>
            <span id="vote">{{like}}</span>
            <ifas class="vote-icon" icon="sort-down" @click="downvote(id)"/>
        </div>
        <div class="content">
            <p>{{ id }} {{ date }}</p>
            <p>{{ msg }}</p>
        </div>
        <div class="menu" id="expand" @click="toggle_comment(id)">
            <ifas class="comments-icon" icon="comment-alt" />
        </div>
        <div class="reply">
            <textarea name="content" @input="[mixin_autoResize_resize($event), change($event)]" placeholder="Reply..." @keyup.enter="ouut"></textarea>
        </div>
        
        <div class="expand-comments" :id="'comments-'+id">
            <CommentContainer 
                v-for="comment in comments" 
                v-bind:key="comment.id"
                v-bind:author="comment.author" 
                v-bind:timestamp="comment.timestamp"
                date="20년 전" 
                v-bind:content="comment.content" 
                />
        </div>
    </div>
</template>

<script>
import mixinAutoResize from "../mixins/AutoResize.js";
import toggle_comment from "../mixins/PostMenu.js";
import CommentContainer from "./CommentContainer";


export default {
    name: 'Post',
    components:{
        CommentContainer

    },
    mixins: [mixinAutoResize, toggle_comment],
    props: {
        id: String,
        author: String,
        msg: String,
        date: String,
        like: Number,
        comments: Array,
    },
    methods:{
        ouut(event){
            var val = event.target.value
            var payload = {'key1': this.id, 'key2': val}
            this.$store.dispatch('newComment', payload)
            event.target.value="";
            event.target.style.height = `16px`;
            console.log(this.id)
        },
        change(event){

            this.$store.state.Post={
                content: event.target.value,
                author: "상훈",
                cmntid: 0
            }
            //console.log(this.$store.state.Post.content)
        },
        upvote(id){

        },
        downvote(id){

        }
    },
    mounted(){
        console.log(this.comments)
    }
  
}

</script>
<style scoped>
    .container{

        display:flex;
        border-style: solid;
        border-width: 2px;
        border-color: black;
        width: 700px;
        flex-wrap: wrap;
        margin: auto;
        margin-top: 15px;
        border-radius: 5px;
    
    }
    .vote-container{
        user-select: none;
        padding: 12px;
        display:inline;
        vertical-align: top;
        width: 50px;
        padding-top: 24px;
    }
    .content{
        display:inline;
        padding-left: 4px;
        padding-right: 12px;
        width: 580px;
        padding-bottom: 10px;
        vertical-align: top;
        
  overflow: hidden;
  text-overflow: ellipsis;

    }
    .vote-container .vote-icon:hover{
        cursor: pointer;
        color: red;
    }
    .vote-icon{
        font-size: 24px;
        display:table;
        margin:0 auto;
    }
    span{
        font-size: 25px;
        display:table;
        margin:0 auto;
    }
    .menu{
        display:inline;
        background-color: gainsboro;
        width: 30px;
        height: 130px;
        align-items: flex-end;
        justify-content: flex-end;
        border-radius: 0px 5px 0px 0px;
    }
    .menu:hover{
        background-color: white;
        cursor: pointer;
        color: white;
    }

    .reply{
        border-top: 1px solid black;
        width: 700px;
        padding: 10px;
    }
    textarea{
        border: none;
        resize: none;
        outline: none;
        overflow:hidden;
        width: 676px;
        height: 16px;
        font-size: 16px;

    }
    .comments-icon{
        display: block;
        line-height: 130px; 
        margin: auto;
        font-size: 16px;
        color: #303030;
        margin-top: 106px;
    }
    .menu:hover, .menu:hover .comments-icon{ 
        color: gainsboro
    }

    .expand-comments{
        display: flex;
        flex-wrap: wrap;
        width: 700px;
    }
</style>