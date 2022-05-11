import React from 'react'
import { Logo } from '../../assets'
import { SignInSocialButton } from '../../components/Atoms/SignInSocialButton'

import * as Styles from './styles'

export function Login() {
  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.TitleContainer>
          <Logo />
          <Styles.Title>
            Controle suas finanças de forma muito simples.
          </Styles.Title>
        </Styles.TitleContainer>
        <Styles.SignInTitle>
          Faça seu login com uma das contas abaixo.
        </Styles.SignInTitle>
      </Styles.Header>
      <Styles.Footer>
        <Styles.ButtonWrapper>
          <SignInSocialButton title='Entrar com Google' type='Google' />
          <SignInSocialButton title='Entrar com Apple' type='Apple' />
        </Styles.ButtonWrapper>
      </Styles.Footer>
    </Styles.Container>
  )
}