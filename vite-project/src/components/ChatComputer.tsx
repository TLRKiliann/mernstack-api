import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuthLogin } from '../context/AuthProvider'
import usePersonnalHook from '../hook/personnal.hook'
import serviceRouting from '../services/serviceRouting'
import { db_computers } from '../models/db_computers'
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
import { computerType } from '../models/computerType'
import img_1 from '../assets/hdd.jpg'
import img_2 from '../assets/cpu.jpg'
import img_3 from '../assets/ram.jpg'
import img_4 from '../assets/motherboard.png'
import img_5 from '../assets/systemd.jpg'
import img_6 from '../assets/process.jpg'
import img_7 from '../assets/world_bin.png'
import img_8 from '../assets/reqres.jpg'
import img_9 from '../assets/firewall.jpg'
import img_12 from '../assets/Cybersecurity.jpg'
import './styleComponents/ChatComputer.scss'


const ChatComputer: React.FC = () => {

  const {id} = useParams<{id?: string}>();
  const { username } = useAuthLogin()
  const Navigate = useNavigate()
  
  const users = usePersonnalHook()
  
  //console.log(users, "- object users")

  const [userRoom, setUserRoom] = useState<Array<UserType>>([])
  //console.log(userRoom, 'userRoom state')
  const [computerDb, setComputerDb] = useState<string>("")
  const [imgBg, setImgBg] = useState<string>("")
  const [links, setLinks] = useState<Array<computerType>>([])

  const handleNavigation = (link: string) => {
    const myTimeOut = setTimeout(() => {
      Navigate(`/computerroom/${link}`)
    }, 1000)
  }

  const handleSetUserRoom = (link: string) => {
    const user = users?.find(user => user.firstName === username)
    const id: number = user.id;
    const changeConfRoom = {...user, isConnected: true}
    const addRoomUser = {
      id: user.id,
      img: user.img,
      firstName: username,
      lastName: user.lastName,
      age: user.age,
      email: user.email,
      location: user.location,
      gender: user.gender,
      mainroom: computerDb,
      room: link,
      isConnected: true,
      signalRecieve: user.signalRecieve,
      messagebox: user.messagebox,
      returnConfirm: user.returnConfirm
    }
    //console.log(addRoomUser.id, 'by id')
    if (user) {
      serviceRouting
        .updateRoomName(id, changeConfRoom)
        .then(initialUserRoom => {
          setUserRoom(users?.map(user => user.id === id ? {
            id: user.id,
            img: user.img,
            firstName: username,
            lastName: user.lastName,
            age: user.age,
            email: user.email,
            location: user.location,
            gender: user.gender,
            mainroom: computerDb,
            room: link,
            isConnected: true,
            signalRecieve: user.signalRecieve,
            messagebox: user.messagebox,
            returnConfirm: user.returnConfirm
            } : user
          ))
        })
        .catch((error) => {
          setUserRoom(users?.map(user => user.firstName !== username))
          alert(`Register name Room issue: ${user.firstName} not found !`)
        })
      handleNavigation(link)
    } else {
      alert("ERROR !!!")
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

  return(
    <div>
      
      <div data-testid="chatctestid" className="div--imgcompute">
        <img
          src={imgBg}
          width="100%"
          height="100%"
          className="img--chatcomputerroom"
          alt={imgBg}
        />
      </div>
      
      <div className="title--computerroom">
        <h1 className="compter--roomdb">{computerDb}</h1>
      </div>

      <div className='compter--room'>
        {Object.values(links).map((val) => (
          <h2 key={val.title} className="links--computer">

            <span
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
