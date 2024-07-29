// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAYMwkIREdLICLX6AxQI_3Ls9BTX2W9vmg',
  authDomain: 'flyerapp-32a51.firebaseapp.com',
  databaseURL: 'https://flyerapp-32a51-default-rtdb.firebaseio.com',
  projectId: 'flyerapp-32a51',
  storageBucket: 'flyerapp-32a51.appspot.com',
  messagingSenderId: '682912465880',
  appId: '1:682912465880:web:109094619c8bbc076768ad',
  measurementId: 'G-2C1JXQP9Q3'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const database = getDatabase(app)

export { database }
