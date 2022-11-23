import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db_users } from '../models/db_users'
import { userType } from '../models/userType'
import worldData from '../assets/world_connected.png'
import rebeka from '../assets/rebeka_smile.jpg'
import jeanne from '../assets/jeanne_smile.jpg'
import paula from '../assets/paula_smile.jpg'
import celestine from '../assets/celestine_smile.jpg'
import './styleComponents/ComputerRoom.scss'

const ComputerRoom: React.FC = () => {

  const params = useParams<{ link?: object }>()
  console.log("params", params)

  const [users, setUsers] = useState<Array<userType>>([])
  const [roomStyle, setRoomStyle] = useState<object>(Object.values(params))
  console.log(roomStyle, "roomStyle")
  const [inputUser, setInputUser] = useState<Array<string>>([])
  const [enteredData, setEnteredData] = useState<Array<string>>([])

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

  const imgAll = [rebeka, jeanne, paula, celestine]
  console.log(imgAll)

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputUser(e.target.value)
  }

  const handleInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setEnteredData(inputUser)
    setInputUser("")
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
              <p>└─ $ ▶ Jerry :&nbsp;{enteredData}</p>
            </div>
            
            <div className="subterminal">
              <input
                type="text"
                value={inputUser}
                onChange={(e) => handleChangeInput(e)}
                placeholder="└─ $ ▶"
                required
              /> 
              <button type="button" onClick={(e) => handleInput(e)}>Enter</button>
            </div>
          </section>
        </div>
        
        <section className="user--online">
          {Object.values(users).map((val, key) => (
            val.isConnected && (
              <div key={key} className="all--usersbanner">   
                <div>
                {imgAll.reduce((img, index) => (
                  <img
                    src={index}
                    width="40px"
                    height="40px"
                    className="smile--img"
                    alt={index}
                  /> 
                ))}
                </div>
                <p>{val.firstName} {val.isConnected
                    ? "Connected" : null}
                </p>
              </div>
            )
          ))}
        </section>
      </div>

    </div>
  )
}

export default ComputerRoom;
