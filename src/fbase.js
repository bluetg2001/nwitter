import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyClwDNuvAY6hvMr3VkqVu42WlEg0f4DRjg",
    authDomain: "nwitter-915c7.firebaseapp.com",
    projectId: "nwitter-915c7",
    storageBucket: "nwitter-915c7.appspot.com",
    messagingSenderId: "833133081401",
    appId: "1:833133081401:web:2a891e09b1f0e3f4862ee8"
  };

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();