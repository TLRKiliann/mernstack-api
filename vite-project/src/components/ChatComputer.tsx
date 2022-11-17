import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { db_computers } from '../models/db_computers'
import { computerType } from '../models/computerType'
import './styleComponents/ChatComputer.scss'

const ChatComputer: React.FC = () => {

  const [roomUsers, setRoomUsers] = useState<Array<computerType>>([])
  //const [newRooms, setNewRooms] = useState<computerType>({})

  let { id } = useParams<number>(null)

  useEffect(() => {
    setRoomUsers(db_computers)
    console.log("useParams", id)
  }, [])

  const titleById = () => {
    const findId = roomUsers.find(room => room.id === id);
    console.log(findId)
    const truc = setRoomUsers(roomUsers.map(i => i.id === id ? {...i, id: findId, title: i.title} : i))
    console.log("truc", truc)
    return truc
  }

  return(
    <div>
      <div className="title--computerroom">
        <h1>Chat computer</h1>
      </div>
      <div style={{color: 'white'}}>
        {roomUsers.slice(0, 1).map(room => (
          <span key={id}>{id} {titleById}</span>
          ))
        }
      </div>
    </div>
  )
}

export default ChatComputer;