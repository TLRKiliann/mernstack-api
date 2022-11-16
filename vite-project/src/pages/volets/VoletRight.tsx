import React from 'react'
import { Link } from 'react-router-dom'
import mother from '../../assets/motherboard.png'
import './VoletRight.scss'


interface VoletRightProps {
  isOpenRight: boolean
  handleVoletsRight: () => void
}

const VoletRight: React.FC = (props: VoletRightProps) => {
  return(
    <div>
      {props.isOpenRight ? (
        <div className="volet--R">
          <div className="subvolet--R">
            <button onClick={props.handleVoletsRight}>X</button>
            <p>Chat Rooms</p>
            <img
              src={mother}
              width='240px'
              height='140px'
              alt='no img volet-R 1'
            />
            <section className="section--voletr">
              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  Hard Disk - SSD
                </Link>
              </li>
              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  CPU
                </Link>
              </li>
              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  RAM
                </Link>
              </li>
              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  Drivers
                </Link>
              </li>
              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  Systemd
                </Link>
              </li>
              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  Process
                </Link>
              </li>
              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  internet
                </Link>
              </li>
              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  Client-Serveur
                </Link>
              </li>
              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  Internet Protocol
                </Link>
              </li>
              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  Request - Response
                </Link>
              </li>

              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  SSH - SCP
                </Link>
              </li>

              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  HTTP - HTTPS
                </Link>
              </li>
              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  Fire-Wall
                </Link>
              </li>
              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  Proxy - VPN
                </Link>
              </li>
              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  Cyber-security
                </Link>
              </li>
            </section>
          </div>
        </div>
        ) : (
        <div className="volet--R2">
          <div className="subvolet--R2">

            <button onClick={props.handleVoletsRight}>X</button>
            <p>Chat Rooms</p>

            <img
              src={mother}
              width='240px'
              height='140px'
              alt='no img volet-R 1'
            />
            <section className="section--voletr">
              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  Hard Disk - SSD
                </Link>
              </li>
              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  CPU
                </Link>
              </li>
              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  RAM
                </Link>
              </li>
              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  Drivers
                </Link>
              </li>
              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  Systemd
                </Link>
              </li>
              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  Process
                </Link>
              </li>
              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  internet
                </Link>
              </li>
              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  Client-Serveur
                </Link>
              </li>
              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  Internet Protocol
                </Link>
              </li>
              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  Request - Response
                </Link>
              </li>

              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  SSH - SCP
                </Link>
              </li>

              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  HTTP - HTTPS
                </Link>
              </li>
              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  Fire-Wall
                </Link>
              </li>
              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  Proxy - VPN
                </Link>
              </li>
              <li className="li--right">
                <Link className="link--tagvoletr"
                  to='/chatcomputer'
                >
                  Cyber-security
                </Link>
              </li>
            </section>
          </div>
        </div>
        )
      }
    </div>
  )
}

export default VoletRight