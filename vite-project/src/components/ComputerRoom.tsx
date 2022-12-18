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
    label: "More Info",
    value: "More Info",
  },
  {
    label: "Question",
    value: "Question",
  }
]

const ComputerRoom: React.FC = () => {

  const params = useParams<{ link?: string }>()
  const Navigate = useNavigate()
  const { username, otherUser, setOtherUser } = useAuthLogin();

  const users = usePersonnalHook()

  const [initialSender, setInitialSender] = useState<Array<string>>([])
  const [roomStyle, setRoomStyle] = useState<{params?: string}>(params.link)
  const [catchById, setCatchById] = useState<Array<UserType>>([])
  const [informUsrMsg, setInformUsrMsg] = useState<Array<UserType>>([])

  const [form, setForm] = useState<Form>({
    invite: {value: 'Private'}
  })

  const [switchAsk, setSwitchAsk] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [isCheckInvite, setIsCheckInvite] = useState<boolean>(false)
  const [displayInvitation, setDisplayInvitation] = useState<boolean>(false)
  const [displayConfirmInvite, setDisplayConfirmInvite] = useState<boolean>(false)

  //Invite someone with chat mode options
  const handleInviteChoice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName: string = e.target.name;
    const fieldValue: string | number  = e.target.value;
    const newField: Field = {[fieldName]: {value: fieldValue}}

    setForm({...form, ...newField});
  }
  
  //Press mail icon to ask for invitation
  const handleAskUserPrivate = (id: number) => {
    const catchUser = users?.find(user => user.id === id)
    setCatchById(catchUser)
    setSwitchAsk(true)
  }

  //Click btn to MsgBox to validate chat mode of invitation. 
  const handleInvitation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setOtherUser(catchById)
    setSwitchAsk(false)
    const sender = users?.find((user) => user.firstName === username)
    setInitialSender(sender)
    const definedRoom = form.invite.value;
    const id = catchById.id
    const data = users?.find(user => user.id === id)
    const msg = `You've received msg from ${username} for ${definedRoom} chat !`
    const dataForSigMsg = {...data, signalRecieve: true, messagebox: msg}
    const verifyName = catchById.firstName
    if (verifyName === username) {
      alert("Hey, wake-up ! It's YOU !!! :D")
    } else if (catchById.isConnected === false) {
      alert(`${catchById.firstName} ${catchById.lastName} is not connected !`)
    } else {    
      const timerId = setTimeout(() => {
        console.log("setTimeout 1")
        setDisplayInvitation(true)
      }, 1000)
      const customMsg = {
        id: catchById.id,
        img: catchById.img,
        firstName: catchById.firstName,
        lastName: catchById.lastName,
        age: catchById.age,
        email: catchById.email,
        location: catchById.location,
        gender: catchById.gender,
        mainroom: catchById.mainroom,
        room: catchById.room,
        isConnected: catchById.isConnected,
        signalRecieve: true,
        sentMsg: catchById.sentMsg,
        messagebox: msg,
        returnConfirm: catchById.returnConfirm,
        password: catchById.password
      }

      serviceRouting
        .putInvitation(id, dataForSigMsg)
        .then(initialData => {
          setInformUsrMsg(users?.map(cust => cust.id === id ? 
            {
              id: cust.id,
              img: cust.img,
              firstName: cust.firstName,
              lastName: cust.lastName,
              age: cust.age,
              email: cust.email,
              location: cust.location,
              gender: cust.gender,
              mainroom: cust.mainroom,
              room: cust.room,
              isConnected: cust.isConnected,
              signalRecieve: true,
              sentMsg: cust.sentMsg,
              messagebox: msg,
              returnConfirm: cust.returnConfirm,
              password: catchById.password
            } : cust
          ))
        })
        .catch((error) => {
          setInformUsrMsg(users?.map(cust => cust.id !== id))
          alert(`${catchById.firstName} do not received msg`)
        })
      console.log("handleInvitation finished !!!")
    }
  }

  const handleTime = () => {
    console.log("handle time ok")
    const myUser = informUsrMsg?.find(user => user.firstName === username)
    console.log(myUser)
    const userSignal = users?.find((u) => u.signalRecieve === true)
    console.log(userSignal)
    if (userSignal.firstname === username) {
      console.log("returnConfirm is validate for both !!!")
      const timerIdTwo = setTimeout(() => {
        Navigate('/computerroom/privatemessage')
      }, 1000)
      setCatchById("")
      setInitialSender("")
      setInformUsrMsg("")
    } else if (myUser) {
      console.log("returnConfirm is validate for both !!!")
      const timerIdTwo = setTimeout(() => {
        Navigate('/computerroom/privatemessage')
      }, 1000)
      setCatchById("")
      setInitialSender("")
      setInformUsrMsg("")
    } else {
      console.log("HandleTime is not validated...")
    }
  }

  //Confirm your invitation after invited has said yes.
  const handleValidInvitation = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isChecked === true) {
      const invitation = form.invite.value
      const user = users?.find(user => user.firstName === username)
      const newId = user.id;
      const changeUserNameReturnConfirm = {...user, id: newId, firstName: username, returnConfirm: true}

      const addPrivateRoom = {
        id: newId,
        img: user.img,
        firstName: username,
        lastName: user.lastName,
        age: user.age,
        email: user.email,
        location: user.location,
        gender: user.gender,
        mainroom: user.mainroom,
        room: invitation,
        isConnected: user.isConnected,
        signalRecieve: user.signalRecieve,
        sentMsg: user.sentMsg,
        messagebox: user.messagebox,
        returnConfirm: true,
        password: user.password
      }
    
      serviceRouting
        .updateUsrRetConf(newId, changeUserNameReturnConfirm)
        .then(initialData => {
          setInformUsrMsg(users?.map(user => user.id === newId ? 
            {
              id: newId,
              img: user.img,
              firstName: username,
              lastName: user.lastName,
              age: user.age,
              email: user.email,
              location: user.location,
              gender: user.gender,
              mainroom: user.mainroom,
              room: invitation,
              isConnected: user.isConnected,
              signalRecieve: user.signalRecieve,
              sentMsg: user.sentMsg,
              messagebox: user.messagebox,
              returnConfirm: true,
              password: user.password
            } : user
          ))
        })
        .catch((error) => {
          setInformUsrMsg(users?.map(cust => cust.id !== newId))
          alert(`Problem to confirm msg...`)
        })
      console.log("handleValidInvitation confirmed")
      handleTime()
    } else {
      console.log("Confirmation not confirmed...")
    }
    setDisplayConfirmInvite(false)
  }

  const handleClose = () => {
    setSwitchAsk(!switchAsk)
  }

  const handleCheckBox = () => {
    setIsChecked(!isChecked)
  }

  const handleSwitchBox = () => {
    setIsCheckInvite(!isCheckInvite)
  }

  //Invited receives your invitation
  const handleInvitedResponse = () => {
    setDisplayInvitation(false)
    const id = catchById.id
    const otherChater = users?.find(user => user.id === id)
    const changeReturnConf = {...otherChater, returnConfirm: true}
    const otherValidatingUser = {
      id: catchById.id,
      img: catchById.img,
      firstName: catchById.firstName,
      lastName: catchById.lastName,
      age: catchById.age,
      email: catchById.email,
      location: catchById.location,
      gender: catchById.gender,
      mainroom: catchById.mainroom,
      room: catchById.room,
      isConnected: catchById.isConnected,
      signalRecieve: catchById.signalRecieve,
      sentMsg: catchById.sentMsg,
      messagebox: catchById.messagebox,
      returnConfirm: true,
      password: user.password
    }

    serviceRouting
      .updateFinalConfirm(id, changeReturnConf)
      .then(initialData => {
        setInformUsrMsg(users?.map(user => user.id === id ? 
          {
            id: user.id,
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
            sentMsg: catchById.sentMsg,
            messagebox: user.messagebox,
            returnConfirm: true,
            password: user.password
          } : user
        ))
      })
      .catch((error) => {
        setInformUsrMsg(users?.map(cust => cust.id !== id))
        alert(`${catchById.firstName} do not received msg`)
      })
    setDisplayConfirmInvite(true)
  }

  return(
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
          handleValidInvitation={handleValidInvitation}
        />
      }

      {displayInvitation ? (
        <div>
          <DisplayInvitationOtherUsr
            key={catchById.id}
            invited={catchById.firstName}
            initialSender={initialSender.firstName}
            form={form.invite.value}
            isCheckInvite={isCheckInvite}
            handleSwitchBox={handleSwitchBox}
            handleInvitedResponse={handleInvitedResponse}
          />
        </div>
      ) : null }

      {switchAsk &&
        <AskMessageBox
          catchById={catchById}
          form={form.invite.value}
          options={options}
          handleInviteChoice={handleInviteChoice}
          handleInvitation={(e) => handleInvitation(e)}
          handleClose={handleClose}
        />
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
        
        <UsersOnline
          roomStyle={roomStyle}
          handleAskUserPrivate={handleAskUserPrivate}
        />

      </div>
    </div>
  )
}

export default ComputerRoom;
