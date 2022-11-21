import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { db_users } from '../models/db_users'
import { userType } from '../models/userType'
import backImg from '../assets/world_bin.png'
import './styleComponents/ChatUser.scss'

const ChatRoom: React.FC = () => {

  const [users, setUsers] = useState<Array<userType>>([])
  const [newNames, setNewNames] = useState<Array<userType>>([])
  console.log(newNames, "newNames")

  const [message, setMessage] = useState<string | null>('')
  const [frameMsg, setFrameMsg] = useState<string | null>([])
  const [display, setDisplay] = useState<boolean>(false);

  const [vsMsg, setVsMsg] = useState<string | null>('')
  const [vsFrameMsg, setVsFrameMsg] = useState<string | null>([])
  const [vsDisplay, setVsDisplay] = useState<boolean>(false);

  const {firstName} = useParams<{firstName?: string}>();
  console.log({firstName})

  useEffect(() => {
    setUsers(db_users)
    const findName = db_users.find(user => user.firstName === firstName)
    console.log(findName, "i'm findid")
    setNewNames(findName)
    setDisplay(false)
    setVsDisplay(false)
  }, [])

  const handleSendMsg = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value)
  }

  const handleSubmitMsg = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(message)
    setFrameMsg(frameMsg.concat(message))
    setMessage("")
    setDisplay(true)
  }

  const handleVsSendMsg = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setVsMsg(event.target.value)
  }

  const handleVsSubmitMsg = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(vsMsg)
    setVsFrameMsg(vsMsg)
    setVsMsg("")
    setVsDisplay(true)
  }

  return(
    <div className="chatuser">

      <div className="img--bgOnechat">
        <img
          src={backImg}
          width='100%'
          height='100%'
          alt='no img chat'
        />
      </div>

      <h1 className="title--chatroom">Chat-Room</h1>

      <div className="three--components">
        <div className="external--user">
          <h2>
            {firstName} - {Object.values(newNames).map((val) => (
              <div>
                <p key={val} style={{margin: "auto"}}>{val}</p>
              </div>
              ))
            }
          </h2>

          <form onSubmit={(event) => handleVsSubmitMsg(event)}>
            <div className="div--msgchat">
              <label>Message :</label>
              <textarea
                name="txt--area2"
                value={vsMsg}
                onChange={(event) => handleVsSendMsg(event)}
              />
              <button type='submit'>Send !</button>
            </div>
          </form>
        </div>

        <div className="central--frame">
          {display ? (
            <span className="span--frame">
              {frameMsg}
            </span>
            ) : null
          }

          {vsDisplay ? (
            <span className="span--frame2">
              {vsFrameMsg}
            </span>
            ) : null
          }
        </div>
        
        <div className="internal--user">
          <h2>You</h2>

          <form onSubmit={(event) => handleSubmitMsg(event)}>
            <div className="div--msgchat">
              <label>Message :</label>
              <textarea
                name="txt--area"
                value={message}
                onChange={(event) => handleSendMsg(event)}
              />
              <button type='submit'>Send !</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default ChatRoom

/*
      ? {...user,
        id: id,
        firstName: convName,
        lastName: lastName,
        age: age,
        email: email,
        location: location,
        gender: gender,
        isConnected: isConnected
      } : user
    )


      <div className="three--components">
        {firstName}
        <div className="external--user">
          <h2>External User</h2>
          {newUsers.slice(0, 1).map(user => (
            <span key={user.id}>
              <h2>{user.firstName}</h2>
              <h2>{user.lastName}</h2>
              <p>ID: {user.id}</p>
              <p>Firstname: {user.firstName}</p> 
              <p>Lastname: {user.lastName}</p>
              <p>Age: {user.age}</p>
              <p>Email: {user.email}</p>
              <p>Location: {user.location}</p>
              <p>Gender: {user.gender}</p>
              <p>Connection: {user.isConnected 
                ? 'Connected' 
                : 'Disconnected...'}</p>
            </span>
            ))
          }
          <form onSubmit={(event) => handleVsSubmitMsg(event)}>
            <div className="div--msgchat">
              <label>Message :</label>
              <textarea
                name="txt--area2"
                value={vsMsg}
                onChange={handleVsSendMsg}
              />
              <button type='submit'>Send !</button>
            </div>
          </form>
        </div>

        <div className="central--frame">
          {display ? (
            <span className="span--frame">
              {frameMsg}
            </span>
            ) : null
          }

          {vsDisplay ? (
            <span className="span--frame2">
              {vsFrameMsg}
            </span>
            ) : null
          }
        </div>
        
        <div className="internal--user">
          <h2>You</h2>
          {newUsers.slice(0, 1).map(user => (
            <span key={user.id}>
              <h2>{user.firstName}</h2>
              <h2>{user.lastName}</h2>
              <p>ID: {user.id}</p>
              <p>Firstname: {user.firstName}</p> 
              <p>Lastname: {user.lastName}</p>
              <p>Age: {user.age}</p>
              <p>Email: {user.email}</p>
              <p>Location: {user.location}</p>
              <p>Gender: {user.gender}</p>
              <p>Connection: {user.isConnected 
                ? 'Connected' 
                : 'Disconnected...'}</p>
            </span>
            ))
          }
          <form onSubmit={(event) => handleSubmitMsg(event)}>
            <div className="div--msgchat">
              <label>Message :</label>
              <textarea
                name="txt--area"
                value={message}
                onChange={handleSendMsg}
              />
              <button type='submit'>Send !</button>
            </div>
          </form>
*/