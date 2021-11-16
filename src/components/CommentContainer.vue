<template>
    <div class="comments" id="comment">
        <div class="icon">
            <ifas class="comment-icon" icon="angle-right"/>
        </div>
        <div class="comments-content">
            <p>{{id}}{{timestamp}}</p>
            <p>{{content}} </p>
        </div>
        <div class="comments-menu">
            <ifas class="icons" icon="trash"/>
            <ifas class="icons" icon="pencil-alt"/>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CommentContainer',
    props:{
        id: String,
        content: String,
        author: String,
        timestamp: String,
    }
}
</script>

<style scoped>
    .icon{
        width: 72px;
        margin: auto;
    }
    .comments{
        border-top-style: solid;
        border-width: 1px;
        border-color: black;
        width: 700px;
        padding-bottom: 10px;
        display:flex;
        flex-wrap: wrap;

    }
    .comments-content{
        display: inline;
        width: 600px;
    }
    .comments-menu{
        display: inline;
        width: 28px;
        margin: 0 auto;
        padding-top: 10px;
    }
    .comments-menu .icons{
        font-size: 16px;
        margin-left: 7px;
    }
    .icons + .icons{
        margin-top: 10px;
    }
    .comment-icon{
        text-align: center;
        font-size: 24px;
        margin-left: 30px;
    }
</style>