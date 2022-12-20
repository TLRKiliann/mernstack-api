import React, { useState, useEffect } from 'react'
import serviceRouting from '../../services/serviceRouting'
import { useAuthLogin } from '../../context/AuthProvider'
import './TerminalComponent.scss'


interface TerminalProps {
  roomStyle: object
}

interface UsernameProps {
  username: string
}

const TerminalComponent: React.FC = (props: {TerminalProps, UsernameProps}) => {

  const dateOfTheDay = Date()
  const [message, setMessage] = useState<string>("")
  const [messages, setMessages] = useState<Array<string>>(JSON.parse(localStorage.getItem("Messages")) || null)
  console.log(messages, "messages")

  useEffect(() => {
    serviceRouting
      .getMsgTerminal()
      .then(response => {
        setMessages(response)
      })
  }, [])

  useEffect(() => {
      localStorage.setItem("Messages", JSON.stringify(messages))
  }, [messages])

  const { username } = useAuthLogin()



  const handleInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (message) {
      setMessages([...messages, {id: dateOfTheDay.slice(0, 24),
        usr: `${username}`, msg: `${message} ✉`}])

      serviceRouting
        .postMsgTerminal(message)
        .then(initialData => {
          setMessages(messages.concat(message))
        })
        .catch((error) => {
          setMessages(newMsg.filter((n) => n.order_id !== id))
          console.log("Send msg error (Terminal)!")
        })
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
        
        {messages?.map((m, index) => (
          <div key={index} className="map--msg">
            <p className="para--chat">{m?.usr} {m?.msg !== undefined 
              ? `$ ▶ ${m?.msg}`
              : null}
            </p>
              <span className="legend--date">
                {m?.order_id}
              </span>
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