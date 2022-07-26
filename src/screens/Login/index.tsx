import React from 'react'
import {Alert, Platform} from 'react-native'
import {Logo} from '../../assets'
import {SignInSocialButton} from '../../components/Atoms/SignInSocialButton'
import {useAuth} from '../../hooks/useAuth'

import * as Styles from './styles'

export function Login() {
  const {onGoogleSignIn} = useAuth()

  const handleGoogleSignIn = async () => {
    try {
      await onGoogleSignIn()
    } catch (error: any) {
      Alert.alert('Erro ao logar', error.message)
    }
  }

  const showPlatformSignInButton = () => {
    switch (Platform.OS) {
      case 'ios':
        return <SignInSocialButton title="Entrar com Apple" type="Apple" />
      default:
        return (
          <SignInSocialButton
            onPress={handleGoogleSignIn}
            title="Entrar com Google"
            type="Google"
          />
        )
    }
  }

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
          {showPlatformSignInButton()}
        </Styles.ButtonWrapper>
      </Styles.Footer>
    </Styles.Container>
  )
}
