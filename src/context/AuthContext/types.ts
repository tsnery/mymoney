import { ReactNode } from "react"
import { TUser } from "../../models/User"

export type TAuthContextProps = {
  user: TUser | null
  onGoogleSignIn: () => Promise<void>
}

export type TAuthProviderProps = {
  children: ReactNode
}

export type TUserResponse = {
  displayName: string
  email: string
  emailVerified: boolean
  isAnonymous: boolean
  phoneNumber: string | null
  photoURL: string | null
  providerId: string
  uid: string
}

export type TGoogleAuthResponse = {
  user: TUserResponse
}