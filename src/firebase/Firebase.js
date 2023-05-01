// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCThknP8dl4d0BqGkjoV1iGL4t4i-UdzHU",
    authDomain: "chef-recipe-client-15e57.firebaseapp.com",
    projectId: "chef-recipe-client-15e57",
    storageBucket: "chef-recipe-client-15e57.appspot.com",
    messagingSenderId: "373634232164",
    appId: "1:373634232164:web:fbf0c0eb6319a7f9cdd471"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;