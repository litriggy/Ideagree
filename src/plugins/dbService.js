import Vue from 'vue'
import moment from 'moment';
import firebase from '@firebase/app'
import {store} from '../store'

import { getDatabase, ref, set, push, get, onValue, query, orderByChild, orderByKey } from "firebase/database";
const db = getDatabase();


function snapshotToArray(snapshot) {
  var returnArr = [];
  //console.log(snapshot)
  snapshot.forEach(function(childSnapshot) {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
      returnArr.push(
        {
          key: childKey,
          content: childData.content,
          like: childData.like,
          timestamp: childData.timestamp,
        }
      )
      //console.log(returnArr)
  });

  return returnArr;
};

class dbService{
  pushPost(payload) {
    console.log(moment().format())
    push(ref(db, 'posts'),{
        content: payload.key1,
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
  var _posts=[]
  //const posts_=[]
  onValue(ref(db, 'posts'), (snapshot)=>{
    var _posts=[]
    snapshot.forEach(function(childSnapshot) {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
      const object = {
        key: childKey,
        content: childData.content,
        like: childData.like,
        timestamp: childData.timestamp,
      }
      _posts.push(object)
      console.log(object)
      })
      
      //posts_ = _posts
      store.state.getPosts = snapshot.val()
  })
  
  
  //return posts_
  //console.log(a.snapshot)
  
  


}

getComments(id){
  let _comments=[]
  onValue(query(ref(db, 'posts/'+id+'/comments'), orderByKey()), (snapshot_)=>{
    snapshot_.forEach((childSnapshot_) => {
      const _childKey = childSnapshot_.key;
      const _childData = childSnapshot_.val();
      _comments.push(
        {
          key: _childKey,
          content: _childData.content,
          timestamp: _childData.timestamp,

        }
      )
    });
    _comments.reverse()
  },{
    onlyOnce: true
  })
  return _comments
}


}
export default new dbService();