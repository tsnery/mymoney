import React from 'react'
import { TUser } from '../../models/User'
import { TAuthContextProps, TAuthProviderProps } from './types'

export const AuthContext = React.createContext({} as TAuthContextProps)

export function AuthProvider({ children }: TAuthProviderProps) {
  const [user, setUser] = React.useState<TUser | null>(null)

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}