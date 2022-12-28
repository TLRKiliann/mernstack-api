import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import serviceRouting from '../services/serviceRouting';
import { useAuthLogin } from '../context/AuthProvider'
import { UserType } from '../models/usertype'
import usePersonnalHook from '../hook/personnal.hook'
import TerminalComponent from './terminalchat/TerminalComponent'
import UsersOnline from './terminalchat/UsersOnline'
import AskMessageBox from './AskMessageBox'
import DisplayInvitationOtherUsr from './DisplayInvitationOtherUsr'
import ConfirmInvitation from './ConfirmInvitation'
import worldData from '../assets/world_connected.png'
import './styleComponents/ComputerRoom.scss'

type Field = {
  value?: sting
  label?: string
}

type Form = {
  invite: Field
}

const options: Field[] = [
  {
    label: "Private",
    value: "Private",
  },
  {
    label: "Info",
    value: "Info",
  },
  {
    label: "Question",
    value: "Question",
  }
]

const ComputerRoom: React.FC = () => {

  const users = usePersonnalHook()
  const { username, otherUser, setOtherUser, versusUser, setVersusUser } = useAuthLogin()

  const params = useParams<{ link?: string }>()
  const Navigate = useNavigate()
  const [roomStyle, setRoomStyle] = useState<{params?: string}>(params.link)

  const [refreshUsers, setRefreshUsers] = useState<Array<UserType>>([])
  //console.log(refreshUsers, "refresher")
  const [displayConfirmInvite, setDisplayConfirmInvite] = useState<boolean>(false)
  const [informUsrMsg, setInformUsrMsg] = useState<Array<UserType>>([])
  //console.log(informUsrMsg, "informUsrMsg")

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Updated ! (1)")
      serviceRouting
        .getAllMembers()
        .then((response) => {
          setRefreshUsers(response)
        })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const [catchById, setCatchById] = useState<Array<UserType>>([])  
  const [validMsg, setValidMsg] = useState<Array<UserType>>([]) 

  const [form, setForm] = useState<Form>({invite: {value: 'Private'}})

  const [switchAsk, setSwitchAsk] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [isCheckInvite, setIsCheckInvite] = useState<boolean>(false)
  const [isNotCheckInvite, setIsNotCheckInvite] = useState<boolean>(false)
  const [isNotConfirm, setIsNotConfirm] = useState<boolean>(false)

  //Invite someone with chat mode options
  const handleInviteChoice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName: string = e.target.name;
    const fieldValue: string | number  = e.target.value;
    const newField: Field = {[fieldName]: {value: fieldValue}}

    setForm({...form, ...newField});
  }
  
  //Press mail icon to ask for invitation
  const handleAskUserPrivate = (id: number) => {
    console.log("handleAskUserPrivate 1")
    const catchUser = users?.find((user) => user.id === id)
    setCatchById(catchUser)
    setSwitchAsk(true)
  }

  //Click btn to MsgBox to validate chat mode of invitation.
  const handleInvitation = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("handleInvitation 2")
    setSwitchAsk(false)
    const data: UserType = catchById
    console.log(data, 'data 1')
    setOtherUser(data)
    const definedRoom: string = form.invite.value
    const id: number = data?.id
    const msg: string = `You've received msg from ${username} for ${definedRoom} chat !`
    const dataForVersusUser = {...data, room: definedRoom, signalRecieve: 1,
      sentMsg: username, messagebox: msg}
    console.log(dataForVersusUser, 'ronaldo - jeanne ? 1')
    
    const verifyName = data.firstName
    if (verifyName === username) {
      alert("Hey, wake-up ! It's YOU !!! :D")
    } else if (data.isConnected === false) {
      alert(`${data.firstName} ${data.lastName} is not connected !`)
    } else {
      console.log("Validate handleInvitation")

      serviceRouting
        .putInvitation(id, dataForVersusUser)
        .then(initialData => {
          setInformUsrMsg(users?.map((user) => user.id === id ? 
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
              signalRecieve: true,
              sentMsg: username,
              messagebox: msg,
              returnConfirm: user.returnConfirm
            } : user
          ))
        })
        .catch((error) => {
          setInformUsrMsg(users?.filter((u) => u.id !== id))
          alert(`${verifyName} do not received msg`)
        })
      setDisplayConfirmInvite(true)
      console.log("handleInvitation finished !!!")
    }
    const pauseTimer = setTimeout(() => {
      console.log("Pause to send to sender too for update room.")
    }, 2000)
    const sendRoomToSender: UserType = users.find((user) => user.firstName === username)
    const newId: number = sendRoomToSender.id
    const senderUser = users.find((user) => user.id === newId)
    console.log(senderUser, 'senderUser 2')
    const changeRoomSender = {...senderUser, room: definedRoom}
    console.log(changeRoomSender, 'ronaldo - jeanne ? 2')

    serviceRouting
      .putInvitationSender(newId, changeRoomSender)
      .then(initialData => {
        setInformUsrMsg(users?.map((usend) => usend.id === newId ? 
          {
            id: newId,
            img: usend.img,
            firstName: usend.firstName,
            lastName: usend.lastName,
            age: usend.age,
            email: usend.email,
            location: usend.location,
            gender: usend.gender,
            mainroom: usend.mainroom,
            room: definedRoom,
            isConnected: usend.isConnected,
            signalRecieve: usend.signalRecieve,
            sentMsg: usend.sentMsg,
            messagebox: usend.messagebox,
            returnConfirm: usend.returnConfirm
          } : usend
        ))
      })
      .catch((error) => {
        setInformUsrMsg(users?.filter((u) => u.id !== newId))
        alert(`${username} do not received msg`)
      })
    console.log("invitation successfull sent to sender & invited !")
  }

  const handleFilterUser = (changeUserNameReturnConfirm: object) => {
    console.log("handleFilterUser 5")
    const retrieveUserName: string = changeUserNameReturnConfirm.firstName
    const retrieveRoom: string = changeUserNameReturnConfirm.room
    const retrieveConfirm: boolean = changeUserNameReturnConfirm.returnConfirm
    if (retrieveUserName === username && (retrieveConfirm !== false || retrieveConfirm !== 0)) {
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
      setRoomStyle(roomStyle)
    }
    setInformUsrMsg("")
    setCatchById("")
    setValidMsg("")
  }

  //Confirm your invitation after invited has said yes.
  const handleBothConfirmation = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("handleBothConfirmation 4")
    if (isChecked === true) {
      const user: UserType = refreshUsers?.find((user) => user.firstName === username)
      const id: number = user?.id;
      const newuser = refreshUsers?.find((u) => u.id === id)
      const noString: string = ""
      const changeUserNameReturnConfirm: object = {...newuser, firstName: username,
        sentMsg: noString, messagebox: noString, returnConfirm: 1}

      serviceRouting
        .updateUsrRetConf(id, changeUserNameReturnConfirm)
        .then(initialData => {
          setValidMsg(refreshUsers?.map((user) => user.id === id ? 
            {
              id: id,
              img: user.img,
              firstName: username,
              lastName: user.lastName,
              age: user.age,
              email: user.email,
              location: user.location,
              gender: user.gender,
              mainroom: user.mainroom,
              room: user?.room,
              isConnected: user.isConnected,
              signalRecieve: user.signalRecieve,
              sentMsg: noString,
              messagebox: noString,
              returnConfirm: true
            } : user
          ))
        })
        .catch((error) => {
          setValidMsg(refreshUsers?.filter((refresher) => refresher.id !== id))
          console.log("Problem to confirm msg handleBothConfirmation...", error)
        })
      console.log("handleBothConfirmation confirmed")
      handleFilterUser(changeUserNameReturnConfirm)
    }
    if ((isNotConfirm === true) && (isChecked === false)) {
      console.log("Confirmation not confirmed...")
      const user: UserType = refreshUsers?.find((u) => u.firstName === username)
      console.log(user, 'user handleBothConfirmation')
      const id: number = user?.id;
      console.log(id, 'id handleBothConfirmation')
      const newuser = refreshUsers?.find((refresher) => refresher.id === id)
      console.log(newuser, 'newuser')
      const noString: string = ""
      const reinitializeCancelConfirm: object = {...newuser, firstName: username,
        room: roomStyle, sentMsg: noString, messagebox: noString, returnConfirm: false}
      console.log(reinitializeCancelConfirm, 'reinitializeCancelConfirm')

      serviceRouting
        .updateUsrCancelConf(id, reinitializeCancelConfirm)
        .then(initialData => {
          setValidMsg(refreshUsers?.map((user) => user.id === id ? 
            {
              id: id,
              img: user.img,
              firstName: username,
              lastName: user.lastName,
              age: user.age,
              email: user.email,
              location: user.location,
              gender: user.gender,
              mainroom: user.mainroom,
              room: roomStyle,
              isConnected: user.isConnected,
              signalRecieve: user.signalRecieve,
              sentMsg: noString,
              messagebox: noString,
              returnConfirm: false
            } : user
          ))
        })
        .catch((error) => {
          setValidMsg(refreshUsers?.filter((refresher) => refresher.id !== id))
          console.log("Not confirmed by both !", error)
        })
      handleFilterUser(reinitializeCancelConfirm)
    }
    setDisplayConfirmInvite(false)
    //Navigate(`/computerroom/${roomStyle}`)
  }

  //Invited receives your invitation
  const handleInvitedResponse = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("handleInvitedResponse 3")
    if (isCheckInvite === true) {
      const findSentMsg: UserType = refreshUsers?.find((u) => u?.sentMsg.length !== 0)
      console.log(findSentMsg, 'findSentMsg')

      const senderInvite: string = findSentMsg?.sentMsg
      console.log(senderInvite, 'senderInvite')

      const searchOtherUser = users?.find((u) => u?.firstName === senderInvite)
      setVersusUser(searchOtherUser)
      const user = users?.find(user => user?.firstName === username)
      const id: number | null = user?.id;
      const confirmInvitFromOther = users?.find((user) => user.id === id)
      const changeReturnConf: object = {...confirmInvitFromOther, signalRecieve: 0,
        returnConfirm: 1}

      serviceRouting
        .updateResponseUser(id, changeReturnConf)
        .then(initialData => {
          setInformUsrMsg(users?.map((user) => user?.id === id ? 
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
              room: user?.room,
              isConnected: user.isConnected,
              signalRecieve: false,
              sentMsg: user.sentMsg,
              messagebox: user.messagebox,
              returnConfirm: true
            } : user
          ))
        })
        .catch((error) => {
          setInformUsrMsg(users?.filter((u) => u.id !== id))
          alert("Problem to confirm msg handleBothConfirmation...", error)
        })
      setDisplayConfirmInvite(true)
      console.log("handleInvitedResponse - phase :3")
    } if ((isCheckInvite === false) && (isNotCheckInvite === true)) {
        /*const sendRoomToSender: UserType = users.find((user) => user.firstName === username)
        const newId: number = sendRoomToSender.id
        const senderUser = users.find((user) => user.id === newId)
        console.log(senderUser, 'senderUser 2')
        const parameterFirstCancelConfirm: object = {...confirmInvitFromOther, 
          signalRecieve: false, returnConfirm: false}

        serviceRouting
          .updateUsrCancelConf(id, parameterFirstCancelConfirm)
          .then(initialData => {
            setInformUsrMsg(users?.map((user) => user?.id === id ? 
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
                room: roomStyle,
                isConnected: user.isConnected,
                signalRecieve: false,
                sentMsg: user.sentMsg,
                messagebox: user.messagebox,
                returnConfirm: false
              } : user
            ))
          })
          .catch((error) => {
            setInformUsrMsg(users?.filter((u) => u.id !== id))
            alert("Problem to confirm msg handleBothConfirmation...", error)
          })*/
        setDisplayConfirmInvite(true)
    }
  }

  const handleClose = () => {
    setSwitchAsk(!switchAsk)
  }

  const handleCheckBox = () => {
    setIsChecked(!isChecked)
  }

  const handleRejectInvite = () => {
    setIsNotCheckInvite(!isNotCheckInvite)
  }

  const handleCheckConfirmation = () => {
    setIsNotConfirm(!isNotConfirm)
  }

  const handleSwitchBox = () => {
    setIsCheckInvite(!isCheckInvite)
  }

  return (
    <div className="nextcomp--room">

      <div className="div--animationroomStyle">
        <div className="rotation--roomstyle">
          <h1>{roomStyle}</h1>
        </div>
      </div>

      {displayConfirmInvite &&
        <ConfirmInvitation
          username={username}
          isChecked={isChecked}
          handleCheckBox={handleCheckBox}
          isNotConfirm={isNotConfirm}
          handleCheckConfirmation={handleCheckConfirmation}
          handleBothConfirmation={handleBothConfirmation}
        />
      }

      <div>
      {refreshUsers?.map((refreshU) => (
        (refreshU?.signalRecieve === 1 && refreshU.firstName === username) ? (
        <DisplayInvitationOtherUsr
          key={refreshU.id}
          id={refreshU.id}
          username={refreshU.firstName}
          initialSender={refreshU.sentMsg}
          roomName={refreshU.room}
          isCheckInvite={isCheckInvite}
          handleSwitchBox={handleSwitchBox}
          isNotCheckInvite={isNotCheckInvite}
          handleRejectInvite={handleRejectInvite}
          handleInvitedResponse={(e) => handleInvitedResponse(e)}
        />
       ) : null 
      ))}
      </div>

      {switchAsk ? ( 
        <AskMessageBox
          key={catchById.id}
          catchById={catchById}
          form={form.invite.value}
          options={options}
          handleInviteChoice={handleInviteChoice}
          handleInvitation={(e) => handleInvitation(e)}
          handleClose={handleClose}
        />
        ) : null
      }

      <h1 className="title--room">Room {Object.values(params)}</h1>
      
      <div data-testid="testdiv" className="div--terminaluser">
        <div className="section--terminal">
          <div className="div--worldbg">
            <img
              src={worldData}
              width="100%"
              height="100%"
              className="img--bgterminal"
              alt={worldData}
            />
          </div>

          <TerminalComponent roomStyle={roomStyle} />

        </div>

        <section className="user--online">
          <div className="div--userolinetitle">
            <h3 className="userolinetitle">Online Users</h3>
          </div>
            {refreshUsers?.map((refreshUser) => (
              <UsersOnline
                key={refreshUser?.id}
                id={refreshUser?.id}
                refreshUser={refreshUser}
                roomStyle={roomStyle}
                handleAskUserPrivate={() => handleAskUserPrivate(refreshUser?.id)}
              />
              ))
            }
        </section>
      </div>
    </div>
  )
}

export default ComputerRoom;
