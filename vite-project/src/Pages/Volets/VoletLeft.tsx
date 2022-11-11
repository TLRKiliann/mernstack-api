import { Component } from 'react'
import { Link } from 'react-router-dom'
import mother from '../../assets/motherboard.png'
import './VoletLeft.scss'


interface VoletLeftProps {
  isLefted: boolean
  handleVoletsRight: () => void
}

export default class VoletLeft extends Component<VoletLeftProps> {
  render() {
    return(
      <div>
        {this.props.isLefted ? (
          <div className="volet--L">
            <div className="subvolet--L">
              <button onClick={this.props.handleVoletsLeft}>X</button>
              <p>Volet L 1</p>

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
          <div className="volet--L2">
            <div className="subvolet--L2">
              <button onClick={this.props.handleVoletsLeft}>X</button>
              <p>Volet L 2</p>

              <img src={mother}
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
