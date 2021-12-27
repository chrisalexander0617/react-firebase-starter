import {initializeApp} from 'firebase/app'
import {getFirestore} from '@firebase/firestore'
// [optional] import { getAnalytics } from "firebase/analytics";

// Replace the values with the configuration variables from your firebase account
// Go to your firebase console at https://console.firebase.google.com/ to set up your web app
// to obtain these variables

// Ensure that you set values to these variables either locally or on your server
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain:  process.env.REACT_APP_AUTH_DOMAIN,
  projectId:  process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId:process.env.REACT_APP_APP_ID,
  measurementId:process.env.REACT_APP_MEASUREMENT_ID
};


// Initialize Firebase Connection
const app = initializeApp(firebaseConfig)

// [optional] const analytics = getAnalytics(app)
export const db = getFirestore(app)