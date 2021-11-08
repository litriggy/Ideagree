import Vue from "vue";
import Vuex from "vuex";
import database from "../plugins/firebase"

import auth from "./auth.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
  },
  actions:{
    getPosts(){

    },
    newPost(postId, content){
      set(ref(database, 'posts/'+postId), {
        content: content,
        like: 0,
        comments: []
  
      })
  
    },
    deletePost(){
  
    },
    editPost(){
  
    },
    getComments(){
  
    },
    newComment(){
      set(ref(database, 'posts/'+postId), {
        content: content,
        like: 0,
        comments: []
  
      })
  
  
    },
    editComment(){
  
    },
    deleteComment(){
  
    }
  }
});