import Vue from "vue";
import Vuex from "vuex";
import database from "../plugins/firebase"
import dbService from '../plugins/dbService'

import auth from "./auth.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
  },
  state: {
    getPosts: {},
    Post: {}

  },
  mutations:{
    GET_POSTS(state, payload){
      state.getPosts = payload
    },


  },
  actions:{
    getPosts({rootState, dispatch, commit}){
      return dbService.getPosts()


    },
    newPost({rootState}){
      return dbService.pushPost({rootState});
  
    },
    deletePost(){
  
    },
    editPost(){
  
    },
    getComments(){
  
    },
    newComment({postId, content}){
      console.log({ content })
      set(ref(this.$firebase, 'posts/'+postId), {
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