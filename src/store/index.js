import Vue from "vue";
import Vuex from "vuex";
import database from "../plugins/firebase"
import dbService from '../plugins/dbService'

import auth from "./auth.module";

Vue.use(Vuex);

export const store = new Vuex.Store({
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
    getPosts({commit}){
      return dbService.getPosts()


    },
    newPost({commit}, payload){
      return dbService.pushPost(payload);
  
    },
    deletePost(){
  
    },
    editPost(){
  
    },
    getComments({commit}, payload){
      //console.log(payload)
      return dbService.getComments(payload)
    },
    newComment({commit}, payload){
      return dbService.pushComment(payload);
  
  
    },
    editComment(){
  
    },
    deleteComment(){
  
    }
  }
});