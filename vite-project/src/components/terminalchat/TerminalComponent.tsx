import React, { useState, useEffect, useRef } from 'react'
import serviceTerminal from '../../services/serviceTerminal'
import { useAuthLogin } from '../../context/AuthProvider'
import './TerminalComponent.scss'


interface TerminalProps {
  roomStyle: object
}

interface UsernameProps {
  username: string
}

const TerminalComponent: React.FC = (props: {TerminalProps, UsernameProps}) => {

  const dateOfTheDay: Date = Date()
  const [message, setMessage] = useState<string>("")
  const [messages, setMessages] = useState<Array<string>>(
    JSON.parse(localStorage.getItem("Messages")) || null)

  const { username } = useAuthLogin()
  const myRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      serviceTerminal
        .getMsgTerminal()
        .then(response => {
          setMessages(response)
        })
    }, 2000)
    return () => clearInterval(interval)
  }, [])


  useEffect(() => {
    myRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const generateId = () => {
    const maxId: number = messages.length > 0
      ? Math.max(...messages.map((msg) => msg.id))
      : 0
    return maxId + 1
  }

  const handleInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (message) {
      const msgTerminal = {
        id: generateId(),
        date: dateOfTheDay.slice(0, 24),
        usr: `${username}`,
        msg: `${message} ✉`,
        room: props.roomStyle
      }

      serviceTerminal
        .postMsgTerminal(msgTerminal)
        .then(initialData => {
          setMessages(messages.concat(msgTerminal))
        })
        .catch((error) => {
          setMessages([])
          console.log("Send msg error (Terminal)!", error)
        })
    } else {
      console.log("message === ''")
    }
    setMessage("")
  }

  return(
    <section className="terminal">
        
      <span className="intro--terminal">
        <h3 className="intro--terminalh3">{props.roomStyle}</h3>
      </span>

      <div className="div--terminal">

        {messages?.slice(-20).map((m) => (
          m.room === props.roomStyle ? (
            <div key={m.id} className="map--msg">
              <p ref={myRef} className="para--chat">
                {m.usr} {m.msg !== "" 
                  ? `▶ ${m.msg} ${m?.room}`
                  : null}
              </p>
                <span className="legend--date">
                  {m?.date}
                </span>
            </div>
            ) : null
          ))
        }
      </div>
      
      <div className="subterminal">
        
        <div className="div--psubterminal">
          <p className="arrow">▶</p>
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
          data-testid="btn-terminal-comp"
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