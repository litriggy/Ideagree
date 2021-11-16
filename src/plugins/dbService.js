import Vue from 'vue'
import moment from 'moment';
import firebase from '@firebase/app'

import { getDatabase, ref, set, push, get, onValue, query, orderByChild, orderByKey } from "firebase/database";
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

pushComment(payload){
  push(ref(db, 'posts/'+payload.key1+'/comments'),{

    content: payload.key2,
    timestamp: moment().format(),
  });
}

getPosts(){
  let _posts=[]
  onValue(query(ref(db, 'posts'), orderByKey()), (snapshot)=>{
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
      _posts.push(
        {
          key: childKey,
          content: childData.content,
          like: childData.like,
          timestamp: childData.timestamp,
          comments: childData.comments

        }
      )
    });
    _posts.reverse()
  })
  return _posts
}

getComments(id){
  let _comments=[]
  onValue(query(ref(db, 'posts/'+id+'/comments'), orderByKey()), (snapshot)=>{
    snapshot.forEach((childSnapshot) => {
      const _childKey = childSnapshot.key;
      const _childData = childSnapshot.val();
      _comments.push(
        {
          key: _childKey,
          content: _childData.content,
          timestamp: _childData.timestamp,

        }
      )
    });
    _comments.reverse()
  })
  return _comments
}


}
export default new dbService();