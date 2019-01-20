
import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyAoUAR0fwoeQEApdCOxfTGq1qQZ0K_KGBg",
  authDomain: "contester-6c94d.firebaseapp.com",
  databaseURL: "https://contester-6c94d.firebaseio.com",
  projectId: "contester-6c94d",
  storageBucket: "contester-6c94d.appspot.com",
  messagingSenderId: "871519586532"
  // apiKey: "AIzaSyCGYz-3ZuN1ERiOF-rfYGFpRnWtCRiUaxY",
  //   authDomain: "ratingteams.firebaseapp.com",
  //   databaseURL: "https://contester-6c94d.firebaseio.com/",
  //   projectId: "ratingteams",
  //   storageBucket: "ratingteams.appspot.com",
  //   messagingSenderId: "956470703373"
  };
 
  export const fire = firebase.initializeApp(config);
  
  
  const database = firebase.database();
 
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth(); 
  console.log('firebase auth', auth);  
  export { firebase, database as default };

