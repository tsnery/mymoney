import { ReactNode } from "react"
import { TUser } from "../../models/User"

export type TAuthContextProps = {
  user: TUser | null
}

export type TAuthProviderProps = {
  children: ReactNode
}