import { useState, useEffect } from 'react'
import serviceRouting from '../services/serviceRouting'
//(file.ts) import { db_users } from '../models/db_users'
import { UserType } from '../models/usertype'

const usePersonnalHook: React.FC = () => {

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

export default usePersonnalHook
