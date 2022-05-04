import React from 'react'
import { ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components'
import * as Styles from './styles'

export function Loading() {

  const { colors } = useTheme()

  return (
    <Styles.Container>
      <ActivityIndicator size="large" color={colors.primary} />
    </Styles.Container>
  )
}