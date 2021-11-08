import Vue from 'vue'
import { initializeApp } from '@firebase/app'

import { getDatabase, ref, set } from '@firebase/database'

const firebaseConfig = {
    apiKey: "2117719ac85989139a1e3029fd9c11b4c49a48f4",
    authDomain: "ideagree-bea65.firebaseapp.com",
    // For databases not in the us-central1 location, databaseURL will be of the
    // form https://[databaseName].[region].firebasedatabase.app.
    // For example, https://your-database-123.europe-west1.firebasedatabase.app
    databaseURL: "https://ideagree-bea65-default-rtdb.asia-southeast1.firebasedatabase.app",
  };

  const app = initializeApp(firebaseConfig)
  const database = getDatabase(app);


Vue.prototype.$firebase = database;