// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQUgfYTxCuUgA5id2YXvfWHL95rjjziRk",
  authDomain: "giaylongthanh-93981.firebaseapp.com",
  projectId: "giaylongthanh-93981",
  storageBucket: "giaylongthanh-93981.appspot.com",
  messagingSenderId: "1045101828895",
  appId: "1:1045101828895:web:b7142a55227259dda62e2a",
  measurementId: "G-DZMBFXPX0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.getElementById("trangchu").addEventListener("click", ()=>{
    window.location.href="index.html";
})

document.getElementById("Dogiay").addEventListener("click", ()=>{
    window.location.href="dogiay.html";
})

document.getElementById("SP").addEventListener("click", ()=>{
    window.location.href="Homepage2.html";
})

document.getElementById("SPTB").addEventListener("click", ()=>{
    window.location.href="SPTB.html";
})

document.getElementById("SPTB2").addEventListener("click", ()=>{
    window.location.href="SPTB.html";
})

document.getElementById("Gioithieu").addEventListener("click", ()=>{
    window.location.href="gioithieu.html";
})

document.getElementById("Gioithieu2").addEventListener("click", ()=>{
    window.location.href="gioithieu.html";
})

document.getElementById("Gioithieu3").addEventListener("click", ()=>{
    window.location.href="gioithieu.html";
})

