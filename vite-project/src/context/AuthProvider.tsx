import React, { createContext, ReactNode,
  useState, useContext } from 'react'

type Props = {
  children: ReactNode
}

type AuthContextProps = {
  auth: object
  setAuth: React.Dispatch<React.SetStateAction<object>>
  username: string
  setUserName: React.Dispatch<React.SetStateAction<string>>
  switchLogin: boolean
  setSwitchLogin: React.Dispatch<React.SetStateAction<boolean>>
  otherUser: object
  setOtherUser: React.Dispatch<React.SetStateAction<object>>
  versusUser: object
  setVersusUser: React.Dispatch<React.SetStateAction<object>>
  tweekGroup: any
  setTweekGroup: React.Dispatch<React.SetStateAction<object>>
  toggle: () => void
  eraseAll: () => void
}

const AuthContext = createContext({} as AuthContextProps)

export const useAuthLogin: React.FC = () => {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC = ({ children }: Props) => {

  const [auth, setAuth] = useState<object>({})
  const [switchLogin, setSwitchLogin] = useState<boolean>(true)
  const [username, setUserName] = useState<string>("")
  const [otherUser, setOtherUser] = useState<object>({})
  const [versusUser, setVersusUser] = useState<object>({})
  const [tweekGroup, setTweekGroup] = useState<object>({})

  const toggle = () => {
    setSwitchLogin(!switchLogin);
  }

  const eraseAll = () => {
    setUserName("")
    setOtherUser("")
    setVersusUser("")
    setTweekGroup("")
    setAuth("")
  }

  return (
    <AuthContext.Provider value={{
      auth,
      setAuth,
      username,
      setUserName,
      switchLogin,
      setSwitchLogin,
      otherUser,
      setOtherUser,
      versusUser,
      setVersusUser,
      tweekGroup,
      setTweekGroup,
      toggle,
      eraseAll
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}