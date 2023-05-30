//register or login user using firebase and google auth
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import { app } from './firebase'

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const signInWithGoogle = () =>
  signInWithPopup(auth, googleProvider)
    .then(result => {
      return result.user
    })
    .catch(error => {
      const errorCode = error.code
      const errorMessage = error.message
      const email = error.customData.email
      const credential = GoogleAuthProvider.credentialFromError(error)
    })
