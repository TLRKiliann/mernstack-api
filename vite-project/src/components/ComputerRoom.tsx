import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db_users } from '../models/db_users'
import { userType } from '../models/userType'
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

      <h1>Room {Object.values(params)}</h1>
      
      <div className="div--terminaluser">
        <textarea className="textarea--terminal">
        </textarea>
        <section className="user--online">
          {Object.values(users).map((val, key) => (
            <p key={key}>
              {val.firstName} {val.isConnected}
            </p>
            ))
          }
        </section>
      </div>

    </div>
  )
}

export default ComputerRoom;

/*
    switch(params) {
      case 'RAM 4GB 8GB 16GB':
        console.log("ok !!!!!!!!!!!!!")
        break
      default:
        console.log("End of loop")
        break
    }
*/