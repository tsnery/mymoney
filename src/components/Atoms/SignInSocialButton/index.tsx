import React from 'react'
import { Google, Apple } from '../../../assets'
import * as Styles from './styles'
import { TSignInButtonProps } from './types'

export function SignInSocialButton({ title, type }: TSignInButtonProps) {

  const renderIcon = () => {
    const icon = {
      Google: <Google />,
      Apple: <Apple />
    }
    return icon[type]
  }

  return (
    <Styles.Container>
      <Styles.IconContainer>
        {renderIcon()}
      </Styles.IconContainer>
      <Styles.Title>{title}</Styles.Title>
    </Styles.Container>
  )
}