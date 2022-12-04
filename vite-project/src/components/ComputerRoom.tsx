import React, { useState, useEffect } from 'react'
//import serviceRouting from '../services/serviceRouting';
import { useParams } from "react-router-dom"
import { db_users } from '../models/db_users'
import { UserType } from '../models/usertype'
import TerminalComponent from './terminalchat/TerminalComponent'
import UsersOnline from './terminalchat/UsersOnline'
import AskMessageBox from './AskMessageBox'
import worldData from '../assets/world_connected.png'
import './styleComponents/ComputerRoom.scss'


const ComputerRoom: React.FC = () => {

  const params = useParams<{ link?: string }>()
  
  const [users, setUsers] = useState<Array<UserType>>([])
  const [roomStyle, setRoomStyle] = useState<{params?: string}>(Object.values(params))
  
  //console.log(roomStyle, "roomStyle")

  const [catchById, setCatchById] = useState<Array<UserType>>([])
  const [switchAsk, setSwitchAsk] = useState<boolean>(false)

  useEffect(() => {
    setUsers(db_users)
    setRoomStyle(roomStyle[0])
  }, [])

  /*useEffect(() => {
    serviceRouting
    .getAllMembers()
    .then(initialData => {
      setUsers(initialData)
    })
    //setUsers(db_users)
    setRoomStyle(roomStyle[0])
  }, [])*/

  const handleAskUserPrivate = (id: number) => {
    //console.log(id,"id1")
    const catchUser = users?.find(user => user.id === id)
    //console.log(catchUser, "catchUser")
    setCatchById(catchUser)
    setSwitchAsk(!switchAsk)
  }

  const handleInvitation = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log(catchById, "catchUser")

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
          handleInvitation={() => handleInvitation()}
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
