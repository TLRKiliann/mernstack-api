import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db_users } from '../models/db_users'
import { userType } from '../models/userType'
import worldData from '../assets/world_data.jpg'
import './styleComponents/ComputerRoom.scss'

const ComputerRoom: React.FC = () => {

  const params = useParams<{ link?: object }>()
  console.log("params", params)

  const [users, setUsers] = useState<Array<userType>>([])
  const [roomStyle, setRoomStyle] = useState<object>(Object.values(params))
  console.log(roomStyle, "roomStyle")

  useEffect(() => {
    setUsers(db_users)
    switch(roomStyle[0]) {
      case 'RAM 4GB 8GB 16GB':
        setRoomStyle("Gigabyte")
        break
      case 'Corasaire - Asus':
        setRoomStyle("Model of RAM")
        break
      default:
        console.log("End of loop")
        break
    }
  }, [])

  return(
    <div className="nextcomp--room">

      <div className={`div--animation${roomStyle}`}>
        <div className="rotation--roomstyle">
          <h1>{roomStyle}</h1>
        </div>
      </div>

      <h1 className="title--room">Room {Object.values(params)}</h1>
      
      <div className="div--terminaluser">

        <div className="section--terminal">          
          <div className="div--worldbg">
            <img src={worldData} width="100%" height="100%" alt={worldData} />
          </div>

          <section className="terminal">
            <div className="div--terminal">
              <p>└─ $ ▶ Jerry :&nbsp;</p>
            </div>
            
            <div className="subterminal">
              <input type="text" placeholder="└─ $ ▶" /> 
            </div>
          </section>
        </div>
        
        <section className="user--online">
          {Object.values(users).map((val, key) => (
            val.isConnected && (
              <p key={key} className="all--usersbanner">
                {val.firstName} {val.isConnected
                  ? "Connected" : null}
              </p>
            )

            ))
          }
        </section>
      </div>

    </div>
  )
}

export default ComputerRoom;
