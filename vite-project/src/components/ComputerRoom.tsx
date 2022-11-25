import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import TerminalComponent from './terminalchat/TerminalComponent'
import UsersOnline from './terminalchat/UsersOnline'
import worldData from '../assets/world_connected.png'
import './styleComponents/ComputerRoom.scss'


const ComputerRoom: React.FC = () => {

  const params = useParams<{ link?: object }>()
  const [roomStyle, setRoomStyle] = useState<object>(Object.values(params))

  useEffect(() => {
    switch(roomStyle[0]) {
      case 'RAM 4GB 8GB 16GB':
        setRoomStyle("Gigabyte RAM")
        break
      case 'Corasaire - Asus':
        setRoomStyle("Model of RAM")
        break
      case 'USB - Ext.HDD - RAM':
        setRoomStyle("USB - Ext.HDD - RAM")
        break
      case 'Read-Write speed':
        setRoomStyle("Read-Write speed")
        break
      default:
        console.log("End of loop")
        break
    }
  }, [])

  return(
    <div className="nextcomp--room">

      <div className="div--animationroomStyle">
        <div className="rotation--roomstyle">
          <h1>{roomStyle}</h1>
        </div>
      </div>

      <h1 className="title--room">Room {Object.values(params)}</h1>
      
      <div className="div--terminaluser">

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
        
        <UsersOnline />

      </div>
    </div>
  )
}

export default ComputerRoom;

/*
              <h4>From localStorage()</h4>
              <p>
                {myLocalStorage}
              </p>
*/