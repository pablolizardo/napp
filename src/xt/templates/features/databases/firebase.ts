// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNX4qYkI1KS7NdgmIbup9gy28awsc8ylM",
    authDomain: "creemos-b1563.firebaseapp.com",
    projectId: "creemos-b1563",
    storageBucket: "creemos-b1563.appspot.com",
    messagingSenderId: "863994451598",
    appId: "1:863994451598:web:c97a6eac201fa9d39b5bdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
