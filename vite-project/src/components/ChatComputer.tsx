import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ComputerType } from '../models/computerType'
import { useAuthLogin } from '../context/AuthProvider'
import useRetrieveDataHook from '../hook/retrieveData.hook'
import serviceRouting from '../services/serviceRouting'
import { db_computeOne } from '../models/db_computeList'
import { db_computeTwo } from '../models/db_computeList'
import { db_computeThree } from '../models/db_computeList'
import { db_computeFour } from '../models/db_computeList'
import { db_computeFive } from '../models/db_computeList'
import { db_computeSix } from '../models/db_computeList'
import { db_computeSeven } from '../models/db_computeList'
import { db_computeEight } from '../models/db_computeList'
import { db_computeNine } from '../models/db_computeList'
import { db_computeTen } from '../models/db_computeList'
import { db_computeEleven } from '../models/db_computeList'
import { db_computeTwelve } from '../models/db_computeList'
import img_1 from '../assets/background/hdd.jpg'
import img_2 from '../assets/background/cpu.jpg'
import img_3 from '../assets/background/ram.jpg'
import img_4 from '../assets/background/motherboard.png'
import img_5 from '../assets/background/systemd.jpg'
import img_6 from '../assets/background/process.jpg'
import img_7 from '../assets/background/world_bin.png'
import img_8 from '../assets/background/reqres.jpg'
import img_9 from '../assets/background/firewall.jpg'
import img_12 from '../assets/background/Cybersecurity.jpg'
import './styleComponents/ChatComputer.scss'

const ChatComputer: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const { username } = useAuthLogin()
  const navigation = useNavigate()  
  const users = useRetrieveDataHook()

  const [userRoom, setUserRoom] = useState<Array<UserType>>([])
  const [computerDb, setComputerDb] = useState<string>("")
  const [imgBg, setImgBg] = useState<string>("")
  const [links, setLinks] = useState<Array<computerType>>([])

  const handleNavigation = (link: string) => {
    const myTimeOut = setTimeout(() => {
      navigation(`/computerroom/${link}`)
    }, 1000)
  }

  const handleSetUserRoom = (link: string) => {
    const user: UserType = users?.find((u) => u.firstName === username)
    const id: number | null = user?.id
    if (id) {
      const notFilled: string = ""
      const newuser: UserType = users?.find(u => u.id === id)
      const changeConfRoom: object = {...newuser, firstName: username,
        mainroom: computerDb, room: link, isConnected: true, signalRecieve: false,
        sentMsg: notFilled, messagebox: notFilled, returnConfirm: false}      
      if (newuser) {
        serviceRouting
          .updateRoomName(id, changeConfRoom)
          .then(initialUserRoom => {
            setUserRoom(users?.map(newuser => newuser.id === id ? {
              id: id,
              img: newuser.img,
              firstName: username,
              lastName: newuser.lastName,
              age: newuser.age,
              email: newuser.email,
              location: newuser.location,
              gender: newuser.gender,
              mainroom: computerDb,
              room: link,
              isConnected: true,
              signalRecieve: false,
              sentMsg: notFilled,
              messagebox: notFilled,
              returnConfirm: false
              } : newuser
            ))
          })
          .catch((error) => {
            setUserRoom(users?.filter(u => u.id !== id))
            alert("Register name Room issue: User not found !")
          })
        handleNavigation(link)
      } else {
        alert("ERROR ChatComputer !!!")
      }
    } else {
      alert("Login to have access to a room required !")
    }
  }

  useEffect(() => {
    switch(id?.toString()) {
      case "1":
        setComputerDb("Hard Disk - SSD")
        setImgBg(img_1)
        setLinks(db_computeOne)
        break
      case "2":
        setComputerDb("CPU")
        setImgBg(img_2)
        setLinks(db_computeTwo)
        break
      case "3":
        setComputerDb("RAM")
        setImgBg(img_3)
        setLinks(db_computeThree)
        break
      case "4":
        setComputerDb("Drivers")
        setImgBg(img_4)
        setLinks(db_computeFour)
        break
      case "5":
        setComputerDb("Systemd")
        setImgBg(img_5)
        setLinks(db_computeFive)
        break
      case "6":
        setComputerDb("Process")
        setImgBg(img_6)
        setLinks(db_computeSix)
        break
      case "7":
        setComputerDb("Client-Server")
        setImgBg(img_7)
        setLinks(db_computeSeven)
        break
      case "8":
        setComputerDb("Protocols")
        setImgBg(img_7)
        setLinks(db_computeEight)
        break
      case "9":
        setComputerDb("Request - Response")
        setImgBg(img_8)
        setLinks(db_computeNine)
        break
      case "10":
        setComputerDb("Fire-Wall")
        setImgBg(img_9)
        setLinks(db_computeTen)
        break
      case "11":
        setComputerDb("Proxy - VPN")
        setImgBg(img_12)
        setLinks(db_computeEleven)
        break
      case "12":
        setComputerDb("Cyber-Security")
        setImgBg(img_12)
        setLinks(db_computeTwelve)
        break
      default:
        console.log("end of switch loop !")
        break
    }
  }, [])

  return (
    <div data-testid="chatcomputer" className="main--chatcomputerroom">
      
      <div data-testid="chatctestid" className="div--chatcomputerroom">
        <img
          src={imgBg}
          width="100%"
          height="100%"
          className="img--chatcomputerroom"
          alt="imgchatcompute"
        />
      </div>
      
      <div className="title--chatcomputerroom">
        <h1 className="compter--roomdb">{computerDb}</h1>
      </div>

      <div className='computer--chatcomputerroom'>
        {Object.values(links).map((val) => (
          <h2 key={val.title} className="links--computer">

            <span
              data-testid="btnchatcomp"
              onClick={() => handleSetUserRoom(val.link)} 
              className="span--linktoroom"
            >
              {val.link}
            </span>
            
          </h2>
          ))
        }
      </div>
    </div>
  )
}

export default ChatComputer;
