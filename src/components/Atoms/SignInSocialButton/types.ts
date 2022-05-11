import { RectButtonProps } from "react-native-gesture-handler"

export type TSignInButtonProps = RectButtonProps & {
  title: string
  type: 'Google' | 'Apple'
}