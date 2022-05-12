import React from 'react'
import { Alert } from 'react-native'
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

import { TUser } from '../../models/User'
import { TAuthContextProps, TAuthProviderProps, TGoogleAuthResponse } from './types'
import { getItemFromStorage, setItemOnStorage } from '../../helpers'

export const AuthContext = React.createContext({} as TAuthContextProps)

export function AuthProvider({ children }: TAuthProviderProps) {
  const [user, setUser] = React.useState<TUser | null>(null)

  React.useEffect(() => {
    getUserFromStorage()
  }, [])

  const getUserFromStorage = async () => {
    try {
      const response = await getItemFromStorage<TUser>('@gofinances:user')
      if (response) {
        setUser(response)
      }
    } catch (error: any) {
      Alert.alert('Erro ao carregar usuário', error)
    }
  }

  const onGoogleSignIn = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn()
      const googleCredential = auth.GoogleAuthProvider.credential(idToken)
      const { user: response } = await auth().signInWithCredential(googleCredential) as TGoogleAuthResponse
      const userData = {
        id: response.uid,
        name: response.displayName,
        email: response.email,
        photo: response.photoURL
      }
      setItemOnStorage('@gofinances:user', userData)
      setUser(userData)
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