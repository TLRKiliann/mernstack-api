import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db_users } from '../models/db_users'
import { userType } from '../models/userType'
import worldData from '../assets/world_connected.png'
import './styleComponents/ComputerRoom.scss'

const ComputerRoom: React.FC = () => {

  const params = useParams<{ link?: object }>()
  //console.log("params", params)

  const [users, setUsers] = useState<Array<userType>>([])
  //console.log(users, "users")

  const [roomStyle, setRoomStyle] = useState<object>(Object.values(params))
  //console.log(roomStyle, "roomStyle")

  const [message, setMessage] = useState<Array<string>>([])
  console.log(message, "message")

  const [enteredData, setEnteredData] = useState<Array<string>>([])
  console.log(enteredData, "enteredData")

  useEffect(() => {
    setUsers(db_users)
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

  const changeInputUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
  }

  const generateId = () => {
    const maxId = enteredData.length > 0
      ? Math.max(...enteredData.map(d => d.id))
      : 0
    return maxId + 1;
  };

  const handleInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const newMessage = {
      id: generateId(),
      msg: message
    }
    setEnteredData([newMessage])
    setMessage([])
  }

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
            <img src={worldData} width="100%" height="100%" alt={worldData} />
          </div>

          <section className="terminal">

            <div className="div--terminal">
            {enteredData.map((data) => (
              <p key={data.id}>└─ $ ▶ koala :&nbsp;{data.msg}</p>
              ))
            }
            </div>
            
            <div className="subterminal">
              <input
                type="text"
                value={message}
                onChange={(e) => changeInputUser(e)}
                placeholder="└─ $ ▶"
                required
              /> 
              <button
                type="button"
                onClick={handleInput}
              >
                Enter
              </button>
            </div>
          </section>
        </div>
        
        <section className="user--online">
          {Object.values(users).map((val, key) => (

              <div key={key} className="all--usersbanner">   
                <div>

                  <img
                    src={val.img}
                    width="40px"
                    height="40px"
                    className="smile--img"
                    alt={val.img}
                  /> 

                </div>
                <p>{val.firstName} {val.isConnected ? (
                  <span style={{color: 'lightgreen'}}>
                    ✔
                  </span>
                  ) : (
                  <span style={{color: 'orange', fontSize: '0.6rem'}}>
                    ❌
                  </span>
                  )
                }
                </p>
              </div>
            
          ))}
        </section>
      </div>

    </div>
  )
}

export default ComputerRoom;
