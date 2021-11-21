import firebase from 'firebase/compat/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'

const env = process.env

export const firebaseApp = firebase.initializeApp({
  apiKey: env.API_KEY,
  authDomain: env.API_KEY,
  projectId: env.PROJECT_ID,
  storageBucket: env.STORAGE_BUCKET,
  messagingSenderId: env.MESSAGING_SENDER_ID,
  appId: env.APP_ID
})

export default function install (Vue) {
  Object.defineProperty(Vue.prototype, '$firebase', {
    get () {
      return firebaseApp
    }
  })
}
