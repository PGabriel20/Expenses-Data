import { initializeApp } from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'

const env = process.env

export const firebaseApp = initializeApp({
  apiKey: env.VUE_APP_API_KEY,
  authDomain: env.VUE_APP_API_KEY,
  projectId: env.VUE_APP_PROJECT_ID,
  storageBucket: env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: env.VUE_APP_MESSAGING_SENDER_ID,
  appId: env.VUE_APP_APP_ID
})

export default function install (Vue) {
  Object.defineProperty(Vue.prototype, '$firebase', {
    get () {
      return firebaseApp
    }
  })
}
