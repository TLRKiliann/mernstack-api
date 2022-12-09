import React, { useState, useEffect } from 'react'
import AllUsers from '../models/db_users'
import UserType from '../models/usertype'

export const PersonnalHook = () => {

  const [users, setUsers] = useState<Array<UserType>>([])

  useEffect(() => {
    setUsers(AllUsers)
  }, [])

  return users
}
