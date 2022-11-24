import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db_users } from '../models/db_users'
import { userType } from '../models/userType'
import worldData from '../assets/world_connected.png'
import btnWorld from '../assets/btn-world.png'
import './styleComponents/ComputerRoom.scss'



const ComputerRoom: React.FC = () => {

  const params = useParams<{ link?: object }>()

  const [users, setUsers] = useState<Array<userType>>([])
  const [roomStyle, setRoomStyle] = useState<object>(Object.values(params))
  const [message, setMessage] = useState<string>("")
  const [messages, setMessages] = useState<Array<string>>([])
  const [myLocalStorage, setMyLocalStorage] = useState<Array<userType>>([])

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

  useEffect(() => {
    localStorage.setItem("Messages", JSON.stringify([messages]))
    const refreshTerminal = localStorage.getItem("Messages")
    setMyLocalStorage(refreshTerminal)
  }, [messages])

  const handleInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (message) {
      setMessages([...messages, {id: Date.now(), usr: "Alphred", msg: `${message} ✉`}])
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

              <span className="intro--terminal">{roomStyle}</span>
              
              {messages.map((data) => (
                <p key={data.id} className="map--msg">
                  $ ▶ {data.usr} ~ {data.msg}
                  <legend className="legend--date">{Date().slice(0, 24)}</legend>
                </p>
                ))
              }
              <h4>From localStorage()</h4>
              <p>
                {myLocalStorage}
              </p>
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
                  width="80px"
                  height="70px"
                  className="img--world"
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
