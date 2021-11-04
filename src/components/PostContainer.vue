<template>


    <div class="container">
        <div class="vote-container">
            <ifas class="vote-icon" icon="sort-up"/>
            <span id="vote">{{like}}</span>
            <ifas class="vote-icon" icon="sort-down" />
        </div>
        <div class="content">
            <p>{{ author }} {{ date }}</p>
            <p>{{ msg }}</p>
        </div>
        <div class="menu" id="expand" onclick="toggle_comment()">
            <ifas class="comments-icon" icon="comment-alt" />
        </div>
        <div class="reply">
            <textarea name="content" @input="mixin_autoResize_resize" placeholder="Reply..."></textarea>

        </div>
        <!--asdfsfd
        <div id="expand-comments">
            <div class="comments" id="comment">
                <div class="icon">
                    <span class="fas fa-angle-right" style="line-height: 72px; vertical-align: middle;"></span>
                </div>
                <div class="comments-content">
                    <p>이상훈 25 Oct. 17:55</p>
                    <p>Lorem ipsum </p>
                </div>
                <div class="comments-menu">
                    <i class="fas fa-trash"></i>
                    <i class="fas fa-pencil-alt"></i>
                </div>
            </div>
            <div class="comments" id="comment">
                <div class="icon">
                    <span class="fas fa-angle-right" style="line-height: 72px; vertical-align: middle;"></span>
                </div>
                <div class="comments-content">
                    <p>이상훈 25 Oct. 17:55</p>
                    <p>Lorem ipsum </p>
                </div>
                <div class="comments-menu">
                    <i class="fas fa-trash"></i>
                    <i class="fas fa-pencil-alt"></i>
                </div>
            </div>
            <div class="comments" id="comment">
                <div class="icon">
                    <span class="fas fa-angle-right" style="line-height: 72px; vertical-align: middle;"></span>
                </div>
                <div class="comments-content">
                    <p>이상훈 25 Oct. 17:55</p>
                    <p>Lorem ipsum </p>
                </div>
                <div class="comments-menu">
                    <i class="fas fa-trash"></i>
                    <i class="fas fa-pencil-alt"></i>
                </div>
            </div>
        </div>-->
    </div>
</template>

<script>
import mixinAutoResize from "../mixins/AutoResize.js";
export default {
    
  name: 'PostContainer',
  mixins: [mixinAutoResize],
  props: {
    author: String,
    msg: String,
    date: String,
    like: Number,


  }
  
}

</script>
<style scoped>
    .container{

        display:flex;
        border-style: solid;
        border-width: 1px;
        border-color: black;
        width: 700px;
        flex-wrap: wrap;
        margin: auto;
        margin-top: 15px;
    
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
    .menu:hover, .menu:hover .comments-icon{ color: gainsboro}
</style>