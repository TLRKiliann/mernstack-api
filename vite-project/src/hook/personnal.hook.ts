import { useState, useEffect } from 'react'
import { db_users } from '../models/db_users'
import { UserType } from '../models/usertype'

export default function usePersonnalHook() {

  const [users, setUsers] = useState<Array<UserType>>([])

  useEffect(() => {
    setUsers(db_users)
  }, [])

  return users
}
