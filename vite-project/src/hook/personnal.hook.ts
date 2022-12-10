import { useState, useEffect } from 'react'
import { db_users } from '../models/db_users'
import { UserType } from '../models/usertype'

const usePersonnalHook: React.FC = () => {

  const [users, setUsers] = useState<Array<UserType>>([])

  useEffect(() => {
    setUsers(db_users)
  }, [])

  return users
}

export default usePersonnalHook