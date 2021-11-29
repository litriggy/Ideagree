<template>
    <div class="container">
        <div class="reply">
            <textarea name="content" @input="[mixin_autoResize_resize($event), change($event)]" placeholder="Reply..." @keyup.enter="ouut"></textarea>
        </div>
    </div>
</template>

<script>
import mixinAutoResize from "../mixins/AutoResize.js";
import toggle_comment from "../mixins/PostMenu.js";
import CommentContainer from "./CommentContainer";


export default {
    name: 'PostBox',
    components:{
        CommentContainer

    },
    mixins: [mixinAutoResize],
    data:()=>({
        comments: []
    }),
    methods:{
        ouut(event){
            var val = event.target.value
            var payload = {'key1': val}
            this.$store.dispatch('newPost', payload)
            event.target.value="";
            event.target.style.height = `16px`;
            console.log(this.id)
        },
        change(event){
            //console.log(this.$store.state.Post.content)
        },
    },
    mounted(){
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
    
</style>