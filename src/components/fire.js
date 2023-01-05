import { initializeApp } from "firebase/app";

var firebaseConfig = {
      apiKey: "AIzaSyBsUgz1vOfVPeW9gd745W6vLOj8QMz78JU",
      authDomain: "authentication-e2c3b.firebaseapp.com",
      projectId: "authentication-e2c3b",
      storageBucket: "authentication-e2c3b.appspot.com",
      messagingSenderId: "530333946702",
      appId: "1:530333946702:web:3cb525540f8f1b1a68841f"
  };

const fire=initializeApp(firebaseConfig);

export default fire;