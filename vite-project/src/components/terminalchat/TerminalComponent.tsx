import React, { useState, useEffect } from 'react'
import { useAuthLogin } from '../../context/AuthProvider'
//import { db_users } from '../../models/db_users'
//import { UserType } from '../../models/usertype'
import './TerminalComponent.scss'


interface TerminalProps {
  roomStyle: object
}

interface UsernameProps {
  username: string
}

const TerminalComponent: React.FC = (props: {TerminalProps, UsernameProps}) => {

  const [message, setMessage] = useState<string>("")
  const [messages, setMessages] = useState<Array<string>>([JSON.parse(localStorage.getItem("Messages"))])

  useEffect(() => {
    if (message) {
      localStorage.setItem("Messages", JSON.stringify(messages))
    } else {
      console.log("No message for useEffect")
    }
  }, [])

  useEffect(() => {
      localStorage.setItem("Messages", JSON.stringify(messages))
  }, [messages])

  const { username } = useAuthLogin()

  const handleInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (message) {
      setMessages([...messages, {id: Date().slice(0, 24),
        usr: `${username}`, msg: `${message} ✉`}])
    } else {
      console.log("message === undefined")
    }
    setMessage("")
  }

  return(
    <section className="terminal">

      <div className="div--terminal">

        <span data-testid="spantestid" className="intro--terminal">
          <h3 className="intro--terminalh3">{props.roomStyle}</h3>
        </span>
        
        {messages?.map((data, index) => (
          <div key={index} className="map--msg">
            <p className="para--chat">{data?.usr} {data?.msg !== undefined 
              ? `$ ▶ ${data?.msg}` : null}</p>
              <span className="legend--date">{data?.id}</span>
          </div>
          ))
        }
      </div>
      
      <div className="subterminal">
        
        <div className="div--psubterminal">
          <p className="arrow">$ ▶</p>
        </div>

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input--message"
          placeholder="Write something here..."
          required
        />
        
        <button
          type="button"
          onClick={handleInput}
          className="btn--user"
        >
          Enter
        </button>

      </div>

    </section>
  )
}

export default TerminalComponent