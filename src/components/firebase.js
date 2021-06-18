import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCimvTCKstZ1ZeIJWgDYlZGgUFKZEuxyQY",
    authDomain: "unique-chat-app-38d3e.firebaseapp.com",
    projectId: "unique-chat-app-38d3e",
    storageBucket: "unique-chat-app-38d3e.appspot.com",
    messagingSenderId: "725142071233",
    appId: "1:725142071233:web:d1ce7ec42ce36d7c3db140",
  })
  .auth();
