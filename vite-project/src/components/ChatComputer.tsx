import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { db_computers } from '../models/db_computers'
import { computerType } from '../models/computerType'
import './styleComponents/ChatComputer.scss'

const ChatComputer: React.FC = () => {

  //const [roomUsers, setRoomUsers] = useState<Array<computerType | null>>([])
  const [newRooms, setNewRooms] = useState<string>("")
  console.log("newRooms2", newRooms)
  
  //let myRoom = []
  const { id } = useParams<{id?: string}>();
  console.log("id", id)

  useEffect(() => {
    switch(id.toString()) {
      case "1":
        setNewRooms("Hard Disk - SSD")
        break
      case "2":
        setNewRooms("CPU")
        break
      case "3":
        setNewRooms("RAM")
        break
      case "4":
        setNewRooms("Drivers")
        break
      case "5":
        setNewRooms("Systemd")
        break
      case "6":
        setNewRooms("Process")
        break
      case "7":
        setNewRooms("Client-Server")
        break
      case "8":
        setNewRooms("Protocols")
        break
      case "9":
        setNewRooms("Request - Response")
        break
      case "10":
        setNewRooms("Fire-Wall")
        break
      case "11":
        setNewRooms("Proxy - VPN")
        break
      case "12":
        setNewRooms("Cyber-Security")
        break
      default:
        console.log("end of switch loop !")
        break
    }
  }, [])

  return(
    <div>
      <div className="title--computerroom">
        <h1>{newRooms}</h1>
      </div>
      <div>
      </div>
    </div>
  )
}

export default ChatComputer;

/*
  /*useEffect(() => {
    setRoomUsers(db_computers)
    handleRoom()
  }, [id])

  const handleRoom = () => {
    const myRooms = roomUsers.filter(room => (
      room?.id === Number(id)
    ))
    setNewRooms(myRooms)
  }

        {newRooms.map(r => (
          <span key={Number(id)}>{r?.id} {r?.title} - {r?.img_bg}</span>
          ))
        }
*/