// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// import { getAnalytics } from 'firebase/analytics';
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: 'AIzaSyDvl_U6QSLukU0NXWyo1ks-N10DyglimfA',
    authDomain: 'chat-ef97a.firebaseapp.com',
    projectId: 'chat-ef97a',
    storageBucket: 'chat-ef97a.appspot.com',
    messagingSenderId: '189060170045',
    appId: '1:189060170045:web:3feeb25c6444a014f40554',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
