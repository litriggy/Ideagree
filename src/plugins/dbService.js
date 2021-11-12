import Vue from 'vue'
import moment from 'moment';
import firebase from '@firebase/app'

import { getDatabase, ref, set, push, get } from "firebase/database";
const db = getDatabase();


class dbService{
  pushPost({rootState}, payload) {
    console.log(moment().format())
    push(ref(db, 'posts'),{
        content: rootState.Post.content,
        like: 0,
        timestamp: moment().format(),
        comments: []
      });
    //postRef.push().set({
    //  content: rootState.Post.content,
    //  like: 0,
    //  timestamp: moment.defaultFormat()
    //});

}
getPosts(){
  return get(ref(db, 'posts'))

}


}
export default new dbService();