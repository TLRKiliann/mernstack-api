import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { db_notes } from '../notes/db_notes'
import { notesType } from '../notes/notestype'
import smileGirl from '../assets/smile.png'
import backImg from '../assets/world_bin.png'
import './styleComponents/ChatUser.scss'

const ChatRoom = () => {

  const [notes, setNotes] = useState<Array<notesType>>(db_notes)
  const [newNotes, setNewNotes] = useState<Array<notesType>>([])

  const [message, setMessage] = useState<string | null>('')
  const [frameMsg, setFrameMsg] = useState<string | null>([])
  const [display, setDisplay] = useState<boolan>(false);

  const [vsMsg, setVsMsg] = useState<string | null>('')
  const [vsFrameMsg, setVsFrameMsg] = useState<string | null>([])
  const [vsDisplay, setVsDisplay] = useState<boolan>(false);

  const id = useParams<number>(null)

  useEffect(() => {
    setNotes(db_notes)
    setNewNotes(db_notes)
    console.log("useParams", id)
    handleParams(id)
    setDisplay(false)
    setVsDisplay(false)
  }, [])

  const handleParams = (id: number) => {
    const newId = Number(id)
    const newNote = notes.filter(note => {
      return note.id === newId
    })
  }

  console.log("newNotes", newNotes)

  const handleSendMsg = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
  }

  const handleSubmitMsg = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(message)
    setFrameMsg(frameMsg.concat(message))
    setMessage("")
    setDisplay(true)
  }

  const handleVsSendMsg = (event: React.ChangeEvent<HTMLInputElement>) => {
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

      <div className="img--bgTwochat">
        <img
          src={smileGirl}
          width='50%'
          height='60%'
          alt='no img chat'
        />
      </div>

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
          <h2>External User</h2>
          {newNotes.slice(0, 1).map(note => (
            <span key={note.id}>
              <h2>{note.firstName}</h2>
              <h2>{note.lastName}</h2>
              <p>ID: {note.id}</p>
              <p>Firstname: {note.firstName}</p> 
              <p>Lastname: {note.lastName}</p>
              <p>Age: {note.age}</p>
              <p>Email: {note.email}</p>
              <p>Location: {note.location}</p>
              <p>Gender: {note.gender}</p>
              <p>Connection: {note.isConnected 
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
          {newNotes.slice(0, 1).map(note => (
            <span key={note.id}>
              <h2>{note.firstName}</h2>
              <h2>{note.lastName}</h2>
              <p>ID: {note.id}</p>
              <p>Firstname: {note.firstName}</p> 
              <p>Lastname: {note.lastName}</p>
              <p>Age: {note.age}</p>
              <p>Email: {note.email}</p>
              <p>Location: {note.location}</p>
              <p>Gender: {note.gender}</p>
              <p>Connection: {note.isConnected 
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

        </div>
      </div>
    </div>
  )
}

export default ChatRoom