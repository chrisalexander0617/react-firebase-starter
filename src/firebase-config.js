import {initializeApp} from 'firebase/app'
import {getFirestore} from '@firebase/firestore'
// [optional] import { getAnalytics } from "firebase/analytics";

// Replace the values with the configuration variables from your firebase account
// Go to your firebase console at https://console.firebase.google.com/ to set up your web app
// to obtain these variables

const firebaseConfig = {
  apiKey:'',
  authDomain:'',
  projectId: '',
  storageBucket:'',
  messagingSenderId:'',
  appId:'',
  measurementId:''
};

// Initialize Firebase Connection
const app = initializeApp(firebaseConfig)

// [optional] const analytics = getAnalytics(app)
export const db = getFirestore(app)