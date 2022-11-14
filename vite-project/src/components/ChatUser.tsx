import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { db_notes } from '../notes/db_notes'
import { notesType } from '../notes/notestype'
import smileGirl from '../assets/smile.png'
import backImg from '../assets/world_bin.png'
import './styleComponents/ChatUser.scss'

const LinksVoletR = (notesType) => {

  const [notes, setNotes] = useState<Array<notesType>>(db_notes)
  const [newNotes, setNewNotes] = useState<Array<notesType>>([])

  const {id} = useParams<number>(0)

  useEffect(() => {
    //console.log(`chatuser/${id}`)
    handleProps(id)
  }, [id])

  const handleProps = (id: number) => {
    const newId = Number(id)
    //console.log("Number id", newId)
    const newNote = notes.filter(note => {
      return note.id === newId
    })
    setNewNotes(newNotes.concat(newNote))
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

      <h1>Chat-Room for Usr from left volet !</h1>

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

          <div className="div--msgchat">
            <label>Message :</label>
            <textarea />
            <button>Send !</button>
          </div>

        </div>

        <div className="central--frame">
          <span>
            Central frame
          </span>
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
          
          <div className="div--msgchat">
            <label>Message :</label>
            <textarea />
            <button>Send !</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LinksVoletR