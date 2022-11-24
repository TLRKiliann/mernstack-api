import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db_users } from '../models/db_users'
import { userType } from '../models/userType'
import worldData from '../assets/world_connected.png'
import btnWorld from '../assets/btn-world.png'
import './styleComponents/ComputerRoom.scss'

const ComputerRoom: React.FC = () => {

  const params = useParams<{ link?: object }>()
  //console.log("params", params)

  const [users, setUsers] = useState<Array<userType>>([])
  //console.log(users, "users")

  const [roomStyle, setRoomStyle] = useState<object>(Object.values(params))
  //console.log(roomStyle, "roomStyle")

  const [message, setMessage] = useState<string>("")
  const [messages, setMessages] = useState<Array<string>>([])

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

  const handleInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (message) {
      setMessages([...messages, {id: Date.now(), msg: `${message} ✉`}])
    }
    setMessage("")
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
            <img
              src={worldData}
              width="100%"
              height="100%"
              className="img--bgterminal"
              alt={worldData}
            />
          </div>

          <section className="terminal">

            <div className="div--terminal">

              <span className="intro--terminal">Wellcome</span>
              
              {messages.map((data) => (
                <p key={data.id} className="map--msg">
                  ▶ {data.id} :&nbsp;{data.msg}
                </p>
                ))
              }
            </div>
            
            <div className="subterminal">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="$ ▶"
                required
              />
              <button
                type="button"
                onClick={handleInput}
                className="btn--user"
              >
              <div className="div--btnworld">
                <img
                  src={btnWorld}
                  width="60px"
                  height="60px"
                  className="btn--world"
                  alt={btnWorld}
                />
              </div>

              <p className="text--btn">
                Enter
              </p>

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
