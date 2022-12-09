import React, {useState, useEffect} from 'react'
import { useAuthLogin } from '../../context/AuthProvider'
import { db_users } from '../../models/db_users'
import { UserType } from '../../models/usertype'
import './PrivateMessage.scss'


const PrivateMessage: React.FC = () => {

  const {otherUser, username} = useAuthLogin();

  const [displayName, setDisplayName] = useState<object>({otherUser})
  const [privateMsg, setPrivateMsg] = useState<string>("")
  const [privateSeveralMsg, setPrivateSeveralMsg] = useState<Array<string>>([])

  const handleUserMessage = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log(typeof(privateMsg), 'privateMsg')
    e.preventDefault()
    if (privateMsg) {
      setPrivateSeveralMsg([...privateSeveralMsg, {id: Date().slice(0, 24),
        usr: `${username}`, msg: `${privateMsg} ✉`}])
    }
    setPrivateMsg("")
  }

  return(
    <div className="private--chat">

      <h1 className="title--privatechat">
        Private Chat
      </h1>

      <div className="private--terminal">
        <div className="sub--privateterminal">
          {Object.values(displayName)?.map(display => (
            <div key={display.id} className="flex--imgnameroom">
              <img
                src={display.img}
                width="95px"
                height="65px"
                className="img--private"
                alt="no img"
              />
              <h4 className="title--private">{display.firstName}</h4>
              <h4 className="title--private">{display.lastName}</h4>
              <h4 className="title--private">{display.age} years</h4>
              <h4 className="title--private">{display.email}</h4>
              <h4 className="title--private">{display.isConnected ? (
                <span
                  className="span--useronline"
                  style={{color: 'lightgreen'}}
                >
                  ✔
                </span>
                ) : (
                <span 
                  className="span--useronline" style={{fontSize:"12px"}}>
                  ❌
                </span>
                )
              }
              </h4>
            </div>
            ))}

        </div>

        <div className="private--messagebox">
          <div>
          {privateSeveralMsg?.map((data) => (
            <div key={data.id} className="map--msg">
              <p className="para--chat">$ ▶ {data.usr} ~ {data.msg}</p>
                <span className="legend--date">{data.id}</span>
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
            placeholder="Enter your message"
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
