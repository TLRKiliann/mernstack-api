import { useState, useEffect } from 'react'
import serviceRouting from '../services/serviceRouting'
//import { db_users } from '../models/db_users'
import { UserType } from '../models/usertype'

const usePersonnalHook: React.FC = () => {

  const [users, setUsers] = useState<Array<UserType>>([])

  useEffect(() => {
    serviceRouting
      .getAllMembers()
      .then(response => {
        setUsers(response)
      })
  }, []);

  return users
}

export default usePersonnalHook

/*
  useEffect(() => {
    serviceRouting
      .getAllMembers()
      .then(initialNote => {
        setUsers(initialNote);
      })
  }, []);

  console.log(users, "usePersonnalHook")

        const returnData = response
        console.log(returnData, 'returnData')
*/