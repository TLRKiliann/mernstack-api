import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { db_notes } from '../notes/db_notes'
import { notesType } from '../notes/notestype'
import './LinksVoletR.scss'

const LinksVoletR = () => {

  const [notes, setNotes] = useState<Array<notesType>>([])
  const [newNotes, setNewNotes] = useState<Array<notesType>>([])

  const {id} = useParams<number>(0)
  console.log("params : ", id)

  useEffect(() => {
    console.log(`linksvoletright/${id}`)
    setNotes(notes.concat(db_notes))
  }, [])

  console.log(newNotes)

  const handleProps = (id: number) => {
    //console.log("id 1 : ", id)
    const newId = Number(id)
    const newNote = db_notes.find(note => note.id === newId)
    setNewNotes(newNote)
    //console.log("newNote : ", newNote)
    //console.log("newId 2 : ", newId)
  }
  
  return(
    <div className="linksvoletright">
      <h1>I'm left volet link !</h1>
        <span style={{color: 'white'}}>ok ok {id}</span>
        <span>{handleProps(id)}</span>
    </div>
  )
}

export default LinksVoletR