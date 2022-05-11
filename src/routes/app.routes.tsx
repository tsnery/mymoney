import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Dashboard } from '../screens/Dashboard'
import { Resume } from '../screens/Resume'
import { useTheme } from 'styled-components'
import { Platform } from 'react-native'
import { Register } from '../screens/Register'

export type AppRoutesParamList = {
  Listagem: undefined
  Registro: undefined
  Resumo: undefined
}

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesParamList>()

export function AppRoutes() {

  const theme = useTheme()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 88,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0
        }
      }}
    >
      <Screen
        name="Listagem"
        component={Dashboard}
        options={{
          tabBarIcon: (({ size, color }) => {
            return (
              <Icon name="format-list-bulleted" size={size} color={color} />
            )
          })
        }}
      />
      <Screen
        name="Registro"
        component={Register}
        options={{
          tabBarIcon: (({ size, color }) => {
            return (
              <Icon name="attach-money" size={size} color={color} />
            )
          })
        }}
      />
      <Screen
        name="Resumo"
        component={Resume}
        options={{
          tabBarIcon: (({ size, color }) => {
            return (
              <Icon name="pie-chart" size={size} color={color} />
            )
          })
        }}
      />
    </Navigator>
  )
}