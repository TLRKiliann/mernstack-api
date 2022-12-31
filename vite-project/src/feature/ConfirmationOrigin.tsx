import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import serviceConfirm from '../services/serviceConfirm'
import { UserType } from '../models/usertype'
import ConfirmInvitation from '../components/ConfirmInvitation'

interface ConfirmProps {
  id: number
  roomStyle: string
  username: string
  refreshUsers: UserType[]
  setRoomStyle: React.Dispatch<React.SetStateAction<string>>
  setRefreshUsers: React.Dispatch<React.SetStateAction<Array<UserType>>>
  setDisplayConfirmInvite: React.Dispatch<React.SetStateAction<boolean>>
  setInformUsrMsg: React.Dispatch<React.SetStateAction<Array<UserType>>>
  setCatchById: React.Dispatch<React.SetStateAction<UserType>>
}

const ConfirmationOrigin = (props: ConfirmProps) => {

  const Navigate = useNavigate()
  const [validMsg, setValidMsg] = useState<Array<UserType>>([])
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [isNotConfirm, setIsNotConfirm] = useState<boolean>(false)

  const handleFilterUser = (changeUserNameReturnConfirm: object) => {
    const renamedUser = props.username
    const retrieveUserName: string = changeUserNameReturnConfirm.firstName
    const retrieveRoom: string = changeUserNameReturnConfirm.room
    const retrieveConfirm: boolean = changeUserNameReturnConfirm.returnConfirm
    if (retrieveUserName === renamedUser && (retrieveConfirm !== false || retrieveConfirm !== 0)) {
      if (retrieveRoom === "Private") {
        console.log("Validation confirmed for room private ! 1")
        const timerIdOne = setTimeout(() => {
          Navigate(`/computerroom/privatechat/${retrieveRoom}`)
        }, 1000)
      } else if (retrieveRoom === "Info") {
        console.log("Validation confirmed for room info ! 2")
        const timerIdOne = setTimeout(() => {
          Navigate(`/computerroom/privatechat/${retrieveRoom}`)
        }, 1000)
      } else if (retrieveRoom === "Question") {
        console.log("Validation confirmed for room Question ! 3")
        const timerIdOne = setTimeout(() => {
          Navigate(`/computerroom/privatechat/${retrieveRoom}`)
        }, 1000)
      } else {
        console.log("No room was found...")
      }
    } else {
      console.log("Not confirmed by all users !")
      props.setRoomStyle(props.roomStyle)
    }
    props.setInformUsrMsg("")
    props.setCatchById("")
    setValidMsg("")
  }

  //Confirm your invitation after invited has said yes.
  const handleBothConfirmation = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    console.log(id, "id handleBothConfirmation !!")
    console.log(isChecked, "isChecked")
    if (isChecked === true) {
      const noString: string = ""
      const noStringTwo: string = ""
      const newuser: UserType = props.refreshUsers?.find((u) => u.id === id)
      console.log(newuser, 'newuser ++')
      const changeUserNameReturnConfirm: object = {...newuser,
        sentMsg: noString, messagebox: noStringTwo, returnConfirm: true}

      serviceConfirm
        .updateUsrRetConf(id, changeUserNameReturnConfirm)
        .then(initialData => {
          setValidMsg(props.refreshUsers?.map((user) => user.id === id ? 
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
              room: user.room,
              isConnected: user.isConnected,
              signalRecieve: user.signalRecieve,
              sentMsg: noString,
              messagebox: noStringTwo,
              returnConfirm: true
            } : user
          ))
        })
        .catch((error) => {
          setValidMsg(props.refreshUsers?.filter((refresher) => refresher.id !== id))
          console.log("Problem to confirm msg handleBothConfirmation...", error)
        })
      const timerPauseRequest = setTimeout(() => {
        console.log("setTimeout of handleFilterUser")
        handleFilterUser(changeUserNameReturnConfirm)
      }, 2000)
    } else {
      const definedRoom: string = props.roomStyle      
      const newuser: UserType = props.refreshUsers?.find((refresher) => refresher.id === id)
      console.log(newuser, 'newuser')
      const noString: string = "---"
      const noStringTwo: string = "---"
      const reinitializeCancelConfirm: object = {...newuser, room: definedRoom,
        sentMsg: noString, messagebox: noStringTwo, returnConfirm: false}
      console.log(reinitializeCancelConfirm, 'reinitializeCancelConfirm')

      serviceConfirm
        .updateUsrCancelConf(id, reinitializeCancelConfirm)
        .then((initialData) => {
          props.setRefreshUsers(props.refreshUsers?.map((user) => user.id === id ? 
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
              room: definedRoom,
              isConnected: user.isConnected,
              signalRecieve: user.signalRecieve,
              sentMsg: noString,
              messagebox: noStringTwo,
              returnConfirm: false
            } : user
          ))
        })
        .catch((error) => {
          props.setRefreshUsers(props.refreshUsers?.filter((refresher) => refresher.id !== id))
          console.log("Not confirmed by both !", error)
        })
    }
    setIsChecked(false)
    setIsNotConfirm(false)
    props.setDisplayConfirmInvite(false)
  }

  const handleCheckBox = () => {
    setIsChecked(!isChecked)
  }

  const handleCheckConfirmation = () => {
    setIsNotConfirm(!isNotConfirm)
  }

  return (
    <ConfirmInvitation
      key={props.id}
      id={props.id}
      username={props.username}
      isChecked={isChecked}
      handleCheckBox={handleCheckBox}
      isNotConfirm={isNotConfirm}
      handleCheckConfirmation={handleCheckConfirmation}
      handleBothConfirmation={(e) => handleBothConfirmation(e, props.id)}
    />
  )
}

export default ConfirmationOrigin