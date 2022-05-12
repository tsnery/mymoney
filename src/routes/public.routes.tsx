import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TPublicRoutesParamList } from './types'
import { Login } from '../screens/Login'

const Stack = createNativeStackNavigator<TPublicRoutesParamList>()

export function PublicRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  )
}