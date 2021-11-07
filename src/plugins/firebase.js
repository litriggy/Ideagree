import Vue from 'vue'
import firebase from 'firebase/app'

import 'firebase/database'

firebase.initializeApp(firebaseConfig)

Vue.prototype.$firebase = firebase;