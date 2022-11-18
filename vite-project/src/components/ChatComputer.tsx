import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { db_computers } from '../models/db_computers'
import { computerType } from '../models/computerType'
import img_1 from '../assets/hdd.jpg'
import img_2 from '../assets/cpu.jpg'
import img_3 from '../assets/ram.jpg'
//import img_4 from '../assets/drivers.jpg'
import img_5 from '../assets/systemd.jpg'
import img_6 from '../assets/process.jpg'
import img_7 from '../assets/world_bin.png'
import img_8 from '../assets/reqres.jpg'
import img_9 from '../assets/firewall.jpg'
//import img_10 from '../assets/proxy.jpg'
import img_12 from '../assets/Cybersecurity.jpg'
import './styleComponents/ChatComputer.scss'


const ChatComputer: React.FC = () => {

  const [newComputer, setNewComputer] = useState<computerType>([])
  const [computerDb, setComputerDb] = useState<string>("")
  const [imgBg, setImgBg] = useState<string>("")
  const [links, setLinks] = useState<Partial<string>>({})

  //console.log("computerDb2", computerDb)

  useEffect(() => {
    setNewComputer(db_computers)
  }, [])
  
  //let myRoom = []
  const { id } = useParams<{id?: string}>();
  console.log("id", id)

  useEffect(() => {
    switch(id.toString()) {
      case "1":
        setComputerDb("Hard Disk - SSD")
        setImgBg(img_1)
        setLinks({
          link1: 'diff HDD - SSD',
          link2: 'HDD rpm',
          link3: 'SSD cell memory',
          link4: 'read/write speed',
          link5: 'I/O'
        })
        break
      case "2":
        setComputerDb("CPU")
        setImgBg(img_2)
        setLinks({
          link1: 'Generation i3-i5-i7',
          link2: 'pin',
          link3: 'Ghz & Max Boost',
          link4: 'read/write speed',
          link5: 'I/O'
        })
        break
      case "3":
        setComputerDb("RAM")
        setImgBg(img_3)
        setLinks({
          link1: 'RAM 4GB 8GB 16GB',
          link2: 'Corasaire - Asus',
          link3: 'USB - Ext.HDD - RAM',
          link4: 'read/write speed',
          link5: 'I/O'
        })
        break
      case "4":
        setComputerDb("Drivers")
        setImgBg(img_7)
        setLinks({
          link1: 'Linux - Mac - Windows',
          link2: '...',
          link3: 'SSD cell memory',
          link4: 'read/write speed',
          link5: 'I/O'
        })
        break
      case "5":
        setComputerDb("Systemd")
        setImgBg(img_5)
        setLinks({
          link1: 'System V5 - Systemd',
          link2: 'files/folder',
          link3: 'inode - modules - runlevel',
          link4: 'read/write',
          link5: 'I/O'
        })
        break
      case "6":
        setComputerDb("Process")
        setImgBg(img_6)
        setLinks({
          link1: 'Process - RAM - CPU',
          link2: 'How to read that ?',
          link3: 'free -h',
          link4: 'vmstat',
          link5: 'I/O'
        })
        break
      case "7":
        setComputerDb("Client-Server")
        setImgBg(img_7)
        setLinks({
          link1: 'ssh - ip - tcp - http - https',
          link2: 'Web-App - Web-Site',
          link3: 'Update',
          link4: 'Passwd - Usr - Root',
          link5: 'Security'
        })
        break
      case "8":
        setComputerDb("Protocols")
        setImgBg(img_3)
        setLinks({
          link1: 'SSH & SCP',
          link2: 'IP',
          link3: 'TCP',
          link4: 'HTTP',
          link5: 'HTTPS'
        })
        break
      case "9":
        setComputerDb("Request - Response")
        setImgBg(img_8)
        setLinks({
          link1: 'Request',
          link2: 'Response',
          link3: 'Data & Metadata',
          link4: '',
          link5: ''
        })
        break
      case "10":
        setComputerDb("Fire-Wall")
        setImgBg(img_9)
        setLinks({
          link1: 'diff UFW - Iptable',
          link2: 'Configuration',
          link3: 'CLI',
          link4: 'nmap - zenmap',
          link5: 'I/O'
        })
        break
      case "11":
        setComputerDb("Proxy - VPN")
        setImgBg(img_3)
        setLinks({
          link1: 'diff HDD - SSD',
          link2: 'HDD rpm',
          link3: 'SSD cell memory',
          link4: 'read/write speed',
          link5: 'I/O'
        })
        break
      case "12":
        setComputerDb("Cyber-Security")
        setImgBg(img_12)
        setLinks({
          link1: 'nmap - zenmap',
          link2: 'Burp Suite',
          link3: 'Gobuster',
          link4: 'Scapy',
          link5: 'Metasploit',
          link6: 'Brute-Force',
          link7: 'Reverse-shell',
          link8: 'Reverse-engeenering',
          link9: 'OSINT'
        })
        break
      default:
        console.log("end of switch loop !")
        break
    }
  }, [])

  return(
    <div>
      <div className="div--imgcompute">
        <img
          src={imgBg}
          width="100%"
          height="100%"
          alt={imgBg}
        />
      </div>
      <div className="title--computerroom">
        <h1>{computerDb}</h1>
      </div>
      <div>
        <p>{Object.values(links)}</p>
        {
        }
      </div>
    </div>
  )
}

export default ChatComputer;
