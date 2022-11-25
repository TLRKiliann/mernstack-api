import React, { useState, useEffect } from 'react'
import { db_users } from '../../models/db_users'
import { userType } from '../../models/userType'
import btnWorld from '../../assets/btn-world.png'
import './TerminalComponent.scss'

interface TerminalProps {
  roomStyle: object
}

const TerminalComponent: React.FC = (props: TerminalProps) => {

  const [message, setMessage] = useState<string>("")
  const [messages, setMessages] = useState<Array<string>>([])
  const [myLocalStorage, setMyLocalStorage] = useState<Array<userType>>([])

  useEffect(() => {
    const localMessages = JSON.parse(localStorage.getItem('Messages'))
  }, [])

  useEffect(() => {
    localStorage.setItem("Messages", JSON.stringify(messages))
    const refreshTerminal = localStorage.getItem("Messages")
    setMyLocalStorage(refreshTerminal)
  }, [messages])

  const handleInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (message) {
      setMessages([...messages, {id: Date().slice(0, 24), usr: "Alphred", msg: `${message} ✉`}])
    }
    setMessage("")
  }

  return(
    <section className="terminal">

      <div className="div--terminal">

        <span className="intro--terminal">{props.roomStyle}</span>
        
        {messages.map((data) => (
          <div key={data.id} className="map--msg">
            <p className="para--chat">$ ▶ {data.usr} ~ {data.msg}</p>
              <span className="legend--date">{data.id}</span>
          </div>
          ))
        }
      </div>
      
      <div className="subterminal">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input--message"
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
  )
}

export default TerminalComponent