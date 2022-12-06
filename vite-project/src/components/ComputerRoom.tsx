import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
//import serviceRouting from '../services/serviceRouting';
import { useAuthLogin } from '../context/AuthProvider'
import { db_users } from '../models/db_users'
import { UserType } from '../models/usertype'
import TerminalComponent from './terminalchat/TerminalComponent'
import UsersOnline from './terminalchat/UsersOnline'
import AskMessageBox from './AskMessageBox'
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
  const { setOtherUser } = useAuthLogin();

  const [users, setUsers] = useState<Array<UserType>>([])
  const [roomStyle, setRoomStyle] = useState<{params?: string}>(Object.values(params))
  const [catchById, setCatchById] = useState<Array<UserType>>([])
  const [switchAsk, setSwitchAsk] = useState<boolean>(false)

  useEffect(() => {
    setUsers(db_users)
    setRoomStyle(roomStyle[0])
  }, [])

  const [form, setForm] = useState<Form>({
    invite: {value: 'Private'}
  })

  const handleInviteChoice = (e: React.ChangeEvent<HTMLInputElement>): void => {
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

  const handleInvitation = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log(catchById, "catchUser")
    setOtherUser(catchById)
    Navigate('/computerroom/privatemessage')
    /*const sendMessage = users?.find(user => user === catchById)
    console.log(sendMessage, "sendMessage")*/

    /*serviceRouting
      .getAllMembers(sendMessage, id)
      .then(initialData => {
        setUsers(initialData)
      })
      .catch((error) => {
        console.log("error", error)
      })
    */
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
    setRoomStyle(roomStyle[0])
  }, [])*/