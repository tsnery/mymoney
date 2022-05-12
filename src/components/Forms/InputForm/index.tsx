import React from 'react'
import { Control } from 'react-hook-form'
import { TextInputProps } from 'react-native'
import { Input } from '../Input'
import { Container, Error } from './styles'
import { Controller } from 'react-hook-form'
import { useTheme } from 'styled-components'

type Props = TextInputProps & {
  control: Control
  name: string
  error: string
}

export function InputForm({ name, control, error, ...rest }: Props) {

  const { colors } = useTheme()

  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            placeholderTextColor={colors.text}
            value={value}
            {...rest}
          />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  )
}