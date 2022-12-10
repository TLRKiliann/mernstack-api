import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
//import serviceRouting from '../services/serviceRouting';
import { useAuthLogin } from '../context/AuthProvider'
import usePersonnalHook from '../hook/personnal.hook'
import TerminalComponent from './terminalchat/TerminalComponent'
import UsersOnline from './terminalchat/UsersOnline'
import AskMessageBox from './AskMessageBox'
import VerifyInvitation from './VerifyInvitation'
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
    label: "Rdv",
    value: "Rdv",
  },
  {
    label: "Briefing",
    value: "Briefing",
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
  const [switchAsk, setSwitchAsk] = useState<boolean>(false)
  const [displayVerifyInvite, setDisplayVerifyInvite] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const [form, setForm] = useState<Form>({
    invite: {value: 'Private'}
  })

  const handleInviteChoice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName: string = e.target.name;
    const fieldValue: string | number  = e.target.value;
    const newField: Field = {[fieldName]: {value: fieldValue}}

    setForm({...form, ...newField});
  }

  console.log(form, 'render of form')

  const handleAskUserPrivate = (id: number) => {
    const catchUser = users?.find(user => user.id === id)
    setCatchById(catchUser)
    setSwitchAsk(!switchAsk)
  }

  const handleInvitation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(catchById, "catchUser")
    setOtherUser(catchById)
    setSwitchAsk(false)

    const timerId = setTimeout(() => {
      setDisplayVerifyInvite(!displayVerifyInvite)
      console.log("timeout...", displayVerifyInvite)
    }, 1000)

    /*const sendMessage = users?.find(user => user === catchById)
    console.log(sendMessage, "sendMessage")*/

    /*serviceRouting
      .postInvitation(sendMessage, id)
      .then(initialData => {
        setUsers(initialData)
      })
      .catch((error) => {
        console.log("error", error)
      })
    */
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
        setDisplayVerifyInvite(false)
        handleTime()
      } else {
        console.log("user undefined")
      }
    } else {
      setDisplayVerifyInvite(false)
      console.log("not confirmed")
    }
  }

  const handleClose = () => {
    setSwitchAsk(false)
  }

  return(
    <div className="nextcomp--room">

      <div className="div--animationroomStyle">
        <div className="rotation--roomstyle">
          <h1>{roomStyle}</h1>
        </div>
      </div>

      {displayVerifyInvite &&
        <VerifyInvitation
          isChecked={isChecked}
          handleCheckBox={handleCheckBox}
          handleValidInvitation={handleValidInvitation}
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

  /*useEffect(() => {
    serviceRouting
    .getAllMembers()
    .then(initialData => {
      setUsers(initialData)
    })
    //setUsers(db_users)
    setRoomStyle(roomStyle)
  }, [])*/