import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBrQBRxyTNMRI-APgUatVxzvez9mXMqd4s",
    authDomain: "nuxtfirebase-a9c49.firebaseapp.com",
    projectId: "nuxtfirebase-a9c49",
    storageBucket: "nuxtfirebase-a9c49.appspot.com",
    messagingSenderId: "137414784237",
    appId: "1:137414784237:web:78ec2066d0ac8c88f088e4",
    measurementId: "G-0Z7CJ2XE6S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const db= firebase.firestore();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
