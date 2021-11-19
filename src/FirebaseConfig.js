// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
     apiKey: "AIzaSyBdUUKNcGS_FDCrBlAaz4JB_9KJX3rPBwU",
     authDomain: "burger-queen-e29b7.firebaseapp.com",
     projectId: "burger-queen-e29b7",
     storageBucket: "burger-queen-e29b7.appspot.com",
     messagingSenderId: "903974576745",
     appId: "1:903974576745:web:8f43631870e9ab54d338f8"
    };

    // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);

// export default app;

