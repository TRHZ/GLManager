import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyC_sUgiFEzjyDqFrtr41nHNvPrfG0laRyU',
    authDomain: 'rnauthglm.firebaseapp.com',
    projectId: 'rnauthglm',
    storageBucket: 'rnauthglm.appspot.com',
    messagingSenderId: '173398118264',
    appId: '1:173398118264:web:9bac8ff8885fb2cd9a028d',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
