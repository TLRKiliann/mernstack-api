import { useState, useEffect } from 'react'
import serviceRouting from '../services/serviceRouting'
import { UserType } from '../models/usertype'

const useRetrieveDataHook: React.FC = () => {

  const [users, setUsers] = useState<Array<UserType>>([])

  useEffect(() => {
    serviceRouting
      .getAllMembers()
      .then((response) => {
        setUsers(response)
      })
      .catch((err) => {
        console.log(err)
      })
    return () => console.log("clean-up useEffect 1")
  }, []);

  return users
}

export default useRetrieveDataHook
