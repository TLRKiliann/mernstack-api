import React, { useState } from 'react'
import { UserType } from '../models/usertype'
import UsersOnline from '../components/terminalchat/UsersOnline'

//Press mail icon to ask for invitation

interface HandleAskUserProps {
  roomStyle: string
  refreshUser: UserType
  users: UserType[]
  setCatchById: React.Dispatch<SetStateAction<UserType>>
  setSwitchAsk: React.Dispatch<SetStateAction<boolean>>
}

const HandleAskUserOrigin: React.FC = (props: HandleAskUserProps) => {
  const handleAskUserPrivate = (id: number) => {
    const catchUser = props.users?.find((user) => user.id === id)
    props.setCatchById(catchUser)
    props.setSwitchAsk(true)
  }
  return (
    <UsersOnline
      key={props.id}
      id={props.id}
      refreshUser={props.refreshUser}
      roomStyle={props.roomStyle}
      handleAskUserPrivate={() => handleAskUserPrivate(props.id)}
    />
  )
}

export default HandleAskUserOrigin