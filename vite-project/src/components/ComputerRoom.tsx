import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import serviceRouting from '../services/serviceRouting';
import { useAuthLogin } from '../context/AuthProvider'
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

  const { username, setOtherUser } = useAuthLogin();

  const users = usePersonnalHook()

  const [roomStyle, setRoomStyle] = useState<{params?: string}>(params.link)
  const [catchById, setCatchById] = useState<Array<UserType>>([])
  const [userRoom, setUserRoom] = useState<Array<UserType>>([])
  console.log(userRoom, "userROOM!!!")


  const [form, setForm] = useState<Form>({
    invite: {value: 'Private'}
  })
  console.log(form, 'form')

  const handleInviteChoice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName: string = e.target.name;
    const fieldValue: string | number  = e.target.value;
    const newField: Field = {[fieldName]: {value: fieldValue}}

    setForm({...form, ...newField});
  }

  const [informUsrMsg, setInformUsrMsg] = useState<Array<UserType>>([])
  //console.log(informUsrMsg, "informUsrMsg !!!!!!")

  const [switchAsk, setSwitchAsk] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const [displayInvite, setDisplayInvite] = useState<boolean>(false)
  console.log(displayInvite, 'displayInvite')

  const [isCheckInvite, setIsCheckInvite] = useState<boolean>(false)
  
  const [displayInvitation, setDisplayInvitation] = useState<boolean>(false)
  const [displayConfirmInvite, setDisplayConfirmInvite] = useState<boolean>(false)
  
  //Ask to otherUser for invitation
  const handleAskUserPrivate = (id: number) => {
    const catchUser = users?.find(user => user.id === id)
    setCatchById(catchUser)
    setSwitchAsk(!switchAsk)
  }

  //Invitation MSG
  const handleInvitation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //console.log(catchById, "catchUser")
    setOtherUser(catchById)
    setSwitchAsk(false)

    const definedRoom = form.invite.value;
    //console.log(definedRoom, "type of definedRoom !!!")
    const msg = `You've received msg from ${username} for ${definedRoom} chat !`
    console.log(msg, '*** msg ***')

    const verifyName = catchById.firstName
    const id = catchById.id

    if (username === verifyName) {
      alert("It's you  !!!")
    } else if (catchById.isConnected === false) {
      alert(`${catchById.firstName} ${catchById.lastName} is not connected !`)
    } else {
      const timerId = setTimeout(() => {
        setDisplayConfirmInvite(!displayConfirmInvite)
        console.log("timeout...", displayConfirmInvite)
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
        messagebox: msg
      }
      if (customMsg) {
        serviceRouting
          .putInvitation(id, customMsg)
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
                messagebox: msg
              } : cust
            ))
          })
          .catch((error) => {
            setInformUsrMsg(users?.map(cust => cust.id !== id))
            alert(`${catchById.firstName} do not received msg`)
          })
        setDisplayInvite(!displayInvitation)
      } else {
        alert("Error msg invitation with customMsg!")
      }
    }
  }

  const handleCheckBox = () => {
    setIsChecked(!isChecked)
  }

  const handleTime = () => {
    const timerIdTwo = setTimeout(() => {
      Navigate('/computerroom/privatemessage')
    }, 1000)
  }

  const handleValidInvitation = () => {
    const invitation = form.invite.value
    console.log(invitation, "invitation")
    if (isChecked === true) {
      const user = Object.values(users)?.find(user => user.firstName === username)
      const addPrivateRoom = {
        id: user.id,
        img: user.img,
        firstName: username,
        lastName: user.lastName,
        age: user.age,
        email: user.email,
        location: user.location,
        gender: user.gender,
        mainroom: user.mainroom,
        room: invitation,
        isConnected: true
      }
      if (user) {
        console.log(user, "user true")
        setUserRoom(addPrivateRoom)
        setDisplayConfirmInvite(false)
        handleTime()
      } else {
        console.log("user undefined")
      }
    } else {
      setDisplayConfirmInvite(false)
      console.log("not confirmed")
    }
  }

  const handleClose = () => {
    setSwitchAsk(false)
  }

  const handleSwitchBox = () => {
    setIsCheckInvite(!isCheckInvite)
  }

  const handleInvitedResponse = () => {
    console.log("is clicked")
    setDisplayInvitation(false)
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
          isChecked={isChecked}
          handleCheckBox={handleCheckBox}
          handleValidInvitation={handleValidInvitation}
        />
      }

      {displayInvitation &&
        <DisplayInvitationOtherUsr
          isCheckInvite={isCheckInvite}
          handleSwitchBox={handleSwitchBox}
          handleInvitedResponse={handleInvitedResponse}
        />
      }

      {switchAsk &&
        <AskMessageBox
          catchById={catchById}
          form={form.invite.value}
          options={options}
          handleInviteChoice={(e) => handleInviteChoice(e)}
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
