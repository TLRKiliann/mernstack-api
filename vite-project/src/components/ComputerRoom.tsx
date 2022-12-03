import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { db_users } from '../models/db_users'
import { userType } from '../models/userType'
import TerminalComponent from './terminalchat/TerminalComponent'
import UsersOnline from './terminalchat/UsersOnline'
import AskMessageBox from './AskMessageBox'
import worldData from '../assets/world_connected.png'
import './styleComponents/ComputerRoom.scss'


const ComputerRoom: React.FC = () => {

  const params = useParams<{ link?: string }>()
  
  const [users, setUsers] = useState<Array<userType>>([])
  const [roomStyle, setRoomStyle] = useState<object>(Object.values(params))
  
  console.log(roomStyle, "roomStyle")

  const [catchById, setCatchById] = useState<Array<userType>>([])
  const [switchAsk, setSwitchAsk] = useState<boolean>(false)

  useEffect(() => {
    setUsers(db_users)
    setRoomStyle(roomStyle[0])
  }, [])

  const handeAskUserPrivate = (id: number) => {
    console.log(id,"id")
    const catchUser = users.find(user => user.id === id)
    console.log(catchUser)
    setCatchById(catchUser)
    setSwitchAsk(!switchAsk)
  }

  const handleClose = () => {
    setSwitchAsk(false)
  }

  const handleInvitation = (e: React.MouseEvent<HTMLButtonElement>, id: number): void => {
    console.log(id, "id")
    console.log("clicked post")
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
          handleInvitation={handleInvitation}
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
          handeAskUserPrivate={handeAskUserPrivate}
        />

      </div>
    </div>
  )
}

export default ComputerRoom;
