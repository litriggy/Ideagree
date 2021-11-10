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
  get(ref(db, 'posts')).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      return snapshot.val()
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}


}
export default new dbService();