import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes'
import { PublicRoutes } from './public.routes'
import { useAuth } from '../hooks/useAuth'

export function Routes() {

  const { user } = useAuth()

  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  )
}