import React, {useState, useEffect, useRef} from 'react'
import { useParams } from 'react-router-dom'
import { useAuthLogin } from '../../context/AuthProvider'
import servicePrivate from '../../services/servicePrivate'
import { UserType } from '../../models/usertype'
import './PrivateMessage.scss'

const PrivateMessage: React.FC = () => {

  const params = useParams<{ retrieveRoom?: string }>()
  const [roomStyle, setRoomStyle] = useState<{params?: string}>(params.retrieveRoom)

  const dateOfTheDay: Date = Date()
  const {otherUser, username, versusUser} = useAuthLogin()

  const [displayUser, setDisplayUser] = useState<object>({})
  const [privateMsg, setPrivateMsg] = useState<string>("")
  const [privateSeveralMsg, setPrivateSeveralMsg] = useState<Array<string>>([])

  const privateRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (Object.keys(otherUser).length === 0) {
      console.log("no otherUser")
      setDisplayUser(versusUser)
    } else {
      console.log("no versusUser")
      setDisplayUser(otherUser)
    }
    const intervalId = setInterval(() => {
      servicePrivate
        .getMsgPrivate()
        .then((response) => {
          setPrivateSeveralMsg(response)
        })
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    privateRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [privateSeveralMsg])

  const generateId = () => {
    const maxId: number = privateSeveralMsg.length > 0
      ? Math.max(...privateSeveralMsg.map(msg => msg.id))
      : 0
    return maxId + 1
  }

  const handleUserMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const privateRoom = "Private"
    if (privateMsg) {
      const msgPrivate = {
        id: generateId(),
        date: dateOfTheDay.slice(0, 24),
        user: `${username}`,
        msg: `${privateMsg} ✉`,
        room: `${privateRoom}`
      }

      servicePrivate
        .postMsgPrivate(msgPrivate)
        .then(initialData => {
          setPrivateSeveralMsg(privateSeveralMsg.concat(msgPrivate))
        })
        .catch((error) => {
          privateSeveralMsg([])
          console.log("Send msg error (Private-Chat)!")
        })
    } else {
      console.log("message === undefined")
    }
    setPrivateMsg("")
  }

  return(
    <div className="private--chat">

      <h1 className="title--privatechat">
        {roomStyle} Chat
      </h1>

      <div className="private--terminal">
        <div className="sub--privateterminal">
          <div className="flex--imgnameroom">
            <img
              src={displayUser.img}
              width="95px"
              height="64px"
              className="img--private"
              alt="no img"
            />
          </div>
          <div className="title--private">
            <h4 className="subtitle--private">{displayUser.firstName}</h4>
            <h4 className="subtitle--private">{displayUser.lastName}</h4>
            <h4 className="subtitle--private">{displayUser.age} years</h4>
            <h4 className="subtitle--private email">{displayUser.email}</h4>
            <h4 className="lastsubtitle--private">{displayUser.isConnected ? (
              <span
                className="span--useronline"
                style={{color: 'lightgreen'}}
              >
                ✔
              </span>
              ) : (
              <span 
                className="span--useronline">
                ❌
              </span>
              )
            }
            </h4>
          </div>
        </div>

        <div className="private--messagebox">
          <div>
          {privateSeveralMsg?.slice(-20).map((data) => (
            <div key={data.id} ref={privateRef} className="map--msg">
              <p className="para--chat">$ ▶ {data.user} ~ {data.msg}</p>
              <legend className="legend--date">{data.date}</legend>
            </div>
            ))
          }
          </div>
        </div>

        <div className="inputbtn--privateterminal">
          <input
            type="text"
            value={privateMsg}
            onChange={(e) => setPrivateMsg(e.target.value)}
            placeholder="Enter your message here !"
          />
          <button
            type="button"
            onClick={handleUserMessage}
            className="private--btn"
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  )
}

export default PrivateMessage
