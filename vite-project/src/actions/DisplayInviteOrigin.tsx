import React, { useState } from 'react'
import { UserType } from '../models/usertype'
import serviceConfirm from '../services/serviceConfirm'
import DisplayInvitationOtherUsr from '../components/DisplayInvitationOtherUsr'

//Other user receives invitation with info (sender & style of invitation)

interface DisplayProps {
  id: number
  roomStyle: string
  username: string
  initialSender: string
  roomName: string
  setDisplayConfirmInvite: React.Dispatch<React.SetStateAction<boolean>>
  setVersusUser: React.Dispatch<React.SetStateAction<Array<UserType>>>
  users: UserType[]
  refreshUsers: UserType[]
  setRefreshUsers: React.Dispatch<React.SetStateAction<Array<UserType>>>
}

const DisplayInviteOrigin: React.FC = (props: DisplayProps) => {
  const [isCheckInvite, setIsCheckInvite] = useState<boolean>(false)
  const [isNotCheckInvite, setIsNotCheckInvite] = useState<boolean>(false)

  const handleInvitedResponse = (e: React.MouseEvent<HTMLButtonElement>, roomName: string) => {
    if (isCheckInvite === true) {
      const newRoom: string = roomName
      const findSentMsg: UserType = props.refreshUsers?.find((u) => u?.sentMsg.length !== 0)
      const senderInvite: string = findSentMsg?.sentMsg
      const searchOtherUser: UserType = props.users?.find((u) => u?.firstName === senderInvite)
      props.setVersusUser(searchOtherUser)
      const user: UserType = props.users?.find((user) => user?.firstName === props.username)
      const id: number | null = user?.id;
      const confirmInvitFromOther: UserType = props.users?.find((user) => user.id === id)
      const changeReturnConf: object = {...confirmInvitFromOther, room: newRoom, signalRecieve: 0,
        returnConfirm: 1}

      serviceConfirm
        .updateResponseUser(id, changeReturnConf)
        .then(initialData => {
          props.setRefreshUsers(props.users?.map((user) => user?.id === id ? 
            {
              id: id,
              img: user.img,
              firstName: user.firstName,
              lastName: user.lastName,
              age: user.age,
              email: user.email,
              location: user.location,
              gender: user.gender,
              mainroom: user.mainroom,
              room: newRoom,
              isConnected: user.isConnected,
              signalRecieve: false,
              sentMsg: user.sentMsg,
              messagebox: user.messagebox,
              returnConfirm: true
            } : user
          ))
        })
        .catch((error) => {
          props.setRefreshUsers(props.users?.filter((u) => u.id !== id))
          console.log("Problem to confirm msg handleBothConfirmation...", error)
        })
      props.setDisplayConfirmInvite(true)
    } else {
      const roomStyleDefined: string = props.roomStyle
      const findSentMsg = props.refreshUsers?.find((u) => u?.sentMsg.length !== 0)
      const senderInvite: string = findSentMsg?.sentMsg
      const searchOtherUser = props.users?.find((u) => u?.firstName === senderInvite)
      const user = props.users?.find((user) => user?.firstName === props.username)
      const id: number | null = user?.id;
      const confirmInvitFromOther: UserType = props.users?.find((user) => user.id === id)
      const changeReturnConf: object = {...confirmInvitFromOther, room: roomStyleDefined, signalRecieve: 0,
        returnConfirm: 0}

      serviceConfirm
        .updateResponseUser(id, changeReturnConf)
        .then(initialData => {
          props.setRefreshUsers(props.users?.map((user) => user?.id === id ? 
            {
              id: id,
              img: user.img,
              firstName: user.firstName,
              lastName: user.lastName,
              age: user.age,
              email: user.email,
              location: user.location,
              gender: user.gender,
              mainroom: user.mainroom,
              room: roomStyleDefined,
              isConnected: user.isConnected,
              signalRecieve: false,
              sentMsg: user.sentMsg,
              messagebox: user.messagebox,
              returnConfirm: false
            } : user
          ))
        })
        .catch((error) => {
          props.setRefreshUsers(props.users?.filter((u) => u.id !== id))
          console.log("Problem to confirm msg handleBothConfirmation...", error)
        })
      setIsNotCheckInvite(false)
      props.setDisplayConfirmInvite(false)
    }
  }

  const handleRejectInvite = () => {
    setIsNotCheckInvite(!isNotCheckInvite)
  }

  const handleSwitchBox = () => {
    setIsCheckInvite(!isCheckInvite)
  }

  return (
    <DisplayInvitationOtherUsr
      id={props.id}
      username={props?.username}
      initialSender={props?.initialSender}
      roomName={props?.roomName}
      isCheckInvite={isCheckInvite}
      isNotCheckInvite={isNotCheckInvite}
      handleSwitchBox={handleSwitchBox}
      handleRejectInvite={handleRejectInvite}
      handleInvitedResponse={(e) => handleInvitedResponse(e, props.roomName)}
    />
  )
}

export default DisplayInviteOrigin