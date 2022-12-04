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
  toggle: () => void
  eraseAll: () => void
}

const AuthContext = createContext({} as AuthContextProps);

export const useAuthLogin: React.FC = () => {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC = ({ children }: Props) => {

  const [auth, setAuth] = useState<object>({});
  const [switchLogin, setSwitchLogin] = useState(true);

  const [username, setUserName] = useState("");

  const toggle = () => {
      setSwitchLogin(!switchLogin);
  };

  const eraseAll = () => {
      setUserName("");
      setAuth("");
  };

  return (
    <AuthContext.Provider value={{
      auth,
      setAuth,
      username,
      setUserName,
      switchLogin,
      setSwitchLogin,
      toggle,
      eraseAll
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};