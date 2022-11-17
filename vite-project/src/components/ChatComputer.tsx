import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { computers } from '../models/db_computer'
import { computerType } from '../models/computerType'
import './styleComponents/ChatComputer.scss'

const ChatComputer: React.FC = () => {

  const [roomUsers, setRoomUsers] = useState<Array<computerType>>([])
  const [newRoomUsers, setNewRoomUsers] = useState<Array<computerType>>([])
  
  const { id } = useParams<number>(null)

  useEffect(() => {
    console.log("ChatComputer useEffect")
    setRoomUsers(computers)
    handleParams(id)
  }, [])

  const handleParams = (id: number) => {
    const computerId = Number(id)
    //console.log("computerId", computerId)
    const newRoomUser = roomUsers.filter(newRoom => newRoom.id === computerId)
    setNewRoomUsers(newRoomUser)
  }

  return(
    <div>

      <div className="title--computerroom">
        <h1>Chat computer</h1>
      </div>

      <div>
        {newRoomUsers.slice(0, 1).map(newRoom => (
          <span key={newRoom.id}>
            <h2>{newRoom.id} {newRoom.title}</h2>
          </span>
          ))
        }
      </div>
    </div>
  )
}

export default ChatComputer;

//<img src={newRoom.img_bg} alt={newRoom.img_bg} />