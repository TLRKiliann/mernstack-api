import { Component } from 'react'
import { Link } from 'react-router-dom'
import mother from '../../assets/motherboard.png'
import './VoletRight.scss'


interface VoletRightProps {
  isClosed: boolean
  handleVoletsRight: () => void
}

export default class VoletRight extends Component<VoletRightProps> {
  render() {
    return(
      <div>
        {this.props.isClosed ? (
          <div className="volet--R">
            <div className="subvolet--R">
              <button onClick={this.props.handleVoletsRight}>X</button>
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
                    to='/linksvoletright'
                  >
                    Hard Disk - SSD
                  </Link>
                </li>
                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
                  >
                    CPU
                  </Link>
                </li>
                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
                  >
                    RAM
                  </Link>
                </li>
                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
                  >
                    Drivers
                  </Link>
                </li>
                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
                  >
                    Systemd
                  </Link>
                </li>
                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
                  >
                    Process
                  </Link>
                </li>
                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
                  >
                    internet
                  </Link>
                </li>
                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
                  >
                    Client-Serveur
                  </Link>
                </li>
                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
                  >
                    Internet Protocol
                  </Link>
                </li>
                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
                  >
                    Request - Response
                  </Link>
                </li>

                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
                  >
                    SSH - SCP
                  </Link>
                </li>

                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
                  >
                    HTTP - HTTPS
                  </Link>
                </li>
                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
                  >
                    Fire-Wall
                  </Link>
                </li>
                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
                  >
                    Proxy - VPN
                  </Link>
                </li>
                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
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

              <button onClick={this.props.handleVoletsRight}>X</button>
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
                    to='/linksvoletright'
                  >
                    Hard Disk - SSD
                  </Link>
                </li>
                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
                  >
                    CPU
                  </Link>
                </li>
                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
                  >
                    RAM
                  </Link>
                </li>
                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
                  >
                    Drivers
                  </Link>
                </li>
                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
                  >
                    Systemd
                  </Link>
                </li>
                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
                  >
                    Process
                  </Link>
                </li>
                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
                  >
                    internet
                  </Link>
                </li>
                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
                  >
                    Client-Serveur
                  </Link>
                </li>
                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
                  >
                    Internet Protocol
                  </Link>
                </li>
                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
                  >
                    Request - Response
                  </Link>
                </li>

                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
                  >
                    SSH - SCP
                  </Link>
                </li>

                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
                  >
                    HTTP - HTTPS
                  </Link>
                </li>
                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
                  >
                    Fire-Wall
                  </Link>
                </li>
                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
                  >
                    Proxy - VPN
                  </Link>
                </li>
                <li className="li--right">
                  <Link className="link--tagvoletr"
                    to='/linksvoletright'
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
}
