import React from 'react'
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

import { TUser } from '../../models/User'
import { TAuthContextProps, TAuthProviderProps, TGoogleAuthResponse } from './types'

export const AuthContext = React.createContext({} as TAuthContextProps)

export function AuthProvider({ children }: TAuthProviderProps) {
  const [user, setUser] = React.useState<TUser | null>(null)

  async function onGoogleSignIn() {
    try {
      const { idToken } = await GoogleSignin.signIn()
      const googleCredential = auth.GoogleAuthProvider.credential(idToken)
      const { user: userResponse } = await auth().signInWithCredential(googleCredential) as TGoogleAuthResponse
      setUser({
        id: userResponse.uid,
        name: userResponse.displayName,
        email: userResponse.email,
        photo: userResponse.photoURL
      })
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  return (
    <AuthContext.Provider value={{ user, onGoogleSignIn }}>
      {children}
    </AuthContext.Provider>
  )
}