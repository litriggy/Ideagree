import Vue from 'vue'

import { getDatabase, ref, set } from "firebase/database";
const db = getDatabase();


export default {
    pushPost({rootState}, payload) {
        console.log(rootState.Post.content)
        set(ref(db, 'posts/' + '123123'), {
            content: rootState.Post.content,
            like: 0,
            timestamp: 1231234
          });

    },
    getPost(){
        
    }
  }