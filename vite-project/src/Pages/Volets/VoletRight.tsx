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
              <p>Volet R 1</p>
              <img
                src={mother}
                width='240px'
                height='140px'
                alt='no img volet-R 1'
              />
              <section>
                <h1>Links</h1>
                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    Hard Drive
                  </Link>
                </li>
                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    CPU
                  </Link>
                </li>
                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    RAM
                  </Link>
                </li>
                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    Drivers
                  </Link>
                </li>
                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    Systemd
                  </Link>
                </li>
                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    Process
                  </Link>
                </li>
                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    internet
                  </Link>
                </li>
                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    Client-Serveur
                  </Link>
                </li>
                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    Internet Protocol
                  </Link>
                </li>
                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    Request - Response
                  </Link>
                </li>

                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    SSH - SCP
                  </Link>
                </li>

                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    HTTP - HTTPS
                  </Link>
                </li>
                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    Fire-Wall
                  </Link>
                </li>
                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    Proxy - VPN
                  </Link>
                </li>
              </section>
            </div>
          </div>
          ) : (
          <div className="volet--R2">
            <div className="subvolet--R2">

              <button onClick={this.props.handleVoletsRight}>X</button>
              <p>Volet R 2</p>

              <img
                src={mother}
                width='240px'
                height='140px'
                alt='no img volet-R 1'
              />
              <section>
                <h1>Links</h1>
                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    Hard Drive
                  </Link>
                </li>
                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    CPU
                  </Link>
                </li>
                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    RAM
                  </Link>
                </li>
                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    Drivers
                  </Link>
                </li>
                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    Systemd
                  </Link>
                </li>
                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    Process
                  </Link>
                </li>
                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    internet
                  </Link>
                </li>
                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    Client-Serveur
                  </Link>
                </li>
                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    Internet Protocol
                  </Link>
                </li>
                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    Request - Response
                  </Link>
                </li>

                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    SSH - SCP
                  </Link>
                </li>

                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    HTTP - HTTPS
                  </Link>
                </li>
                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    Fire-Wall
                  </Link>
                </li>
                <li className="li">
                  <Link className="link--tagvolet"
                    to='/linksvoletright'
                  >
                    Proxy - VPN
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
