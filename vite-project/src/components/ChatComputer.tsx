import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom"
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

  const { id } = useParams<{id?: string}>();

  const [newComputer, setNewComputer] = useState<computerType>([])
  const [computerDb, setComputerDb] = useState<string>("")
  const [imgBg, setImgBg] = useState<string>("")
  const [links, setLinks] = useState<Array<computerType>>([])

  useEffect(() => {
    setNewComputer(db_computers)
  }, [])

  useEffect(() => {
    switch(id?.toString()) {
      case "1":
        setComputerDb("Hard Disk - SSD")
        setImgBg(img_1)
        setLinks(db_computeOne)
        //console.log(db_computeOne)
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
          alt={imgBg}
        />
      </div>
      
      <div className="title--computerroom">
        <h1 className="compter--roomdb">{computerDb}</h1>
      </div>

      <div className='compter--room'>
        {Object.values(links).map((val) => (
          <h2 key={val.title} className="links--computer">
            <Link to={`/computerroom/${val.link}`}
              className="link--toroom">
              {val.link}
            </Link>
          </h2>
          ))
        }
      </div>

    </div>
  )
}

export default ChatComputer;
