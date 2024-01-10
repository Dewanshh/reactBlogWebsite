import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCboEHca4DPpW8pkTiS7UEgr3GtiO0spO0",
  authDomain: "react-blog-157b8.firebaseapp.com",
  projectId: "react-blog-157b8",
  storageBucket: "react-blog-157b8.appspot.com",
  messagingSenderId: "771329401275",
  appId: "1:771329401275:web:72eb0a1f07f9283ed9649e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
