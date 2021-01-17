var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");
require("firebase/firestore");
require("firebase/messaging");
require("firebase/functions");
require("firebase/storage");
let config={
    apiKey: "AIzaSyDtMSJQTntzs9pJ4RdexIzaqbustNvIXOg",
    authDomain: "contester-web.firebaseapp.com",
    databaseURL: "https://contester-web.firebaseio.com",
    projectId: "contester-web",
    storageBucket: "contester-web.appspot.com",
    messagingSenderId: "304056432407",
    appId: "1:304056432407:web:25308430dcadd33ad56952",
    measurementId: "G-R00VEB6GN0"
};
firebase.initializeApp(config);
export  {firebase};
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();