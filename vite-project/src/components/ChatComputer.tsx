import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { db_computers } from '../models/db_computers'
import { computerType } from '../models/computerType'
import './styleComponents/ChatComputer.scss'

const ChatComputer: React.FC = () => {

  const [roomUsers, setRoomUsers] = useState<Array<computerType>>([])
  const [newRooms, setNewRooms] = useState<computerType>()
  console.log("newRooms", newRooms)

  let { id } = useParams<number>(null)

  useEffect(() => {
    setRoomUsers(db_computers)
    handleRoom(id)
  }, [])

  const handleRoom = (id: number) => {
    const computeId = Number(id)
    const findRoom = roomUsers.filter(room => (
      room.id === Number(computeId)
    ))
    setNewRooms(findRoom)
  }

  return(
    <div>
      <div className="title--computerroom">
        <h1>Chat computer</h1>
      </div>

      <div>
      </div>
      
      {newRooms ? (
        newRooms.map(r => (
          <span key={r.id}>{r.id} - {r.title} - {r.img_bg}</span>
          ))
        
        ) : null
      }
    </div>
  )
}

export default ChatComputer;