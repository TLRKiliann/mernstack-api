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
              <img src={mother} width='100px' alt='no img volet-R 1' />
              <section>
                <h1>Links</h1>
                <li className="li">
                  <Link
                    to='/linksvoletright'
                    style={{
                      textDecoration: 'none',
                      color: 'lightgreen'
                    }}
                  >
                    Hard Drive
                  </Link>
                </li>
                <li className="li">
                  <Link
                    to='/linksvoletright'
                    style={{
                      textDecoration: 'none',
                      color: 'lightgreen'
                    }}>CPU</Link>
                </li>
                <li className="li">
                  <Link
                    to='/linksvoletright'
                    style={{
                      textDecoration: 'none',
                      color: 'lightgreen'
                    }}>RAM</Link>
                </li>
                <li className="li">
                  <Link
                    to='/linksvoletright'
                    style={{
                      textDecoration: 'none',
                      color: 'lightgreen'
                    }}>Drivers</Link>
                </li>
                <li className="li">
                  <Link
                    to='/linksvoletright'
                    style={{
                      textDecoration: 'none',
                      color: 'lightgreen'
                    }}>Systemd</Link>
                </li>
                <li className="li">
                  <Link
                    to='/linksvoletright'
                    style={{
                      textDecoration: 'none',
                      color: 'lightgreen'
                    }}>Process</Link>
                </li>
                <li className="li">
                  <Link
                    to='/linksvoletright'
                    style={{
                      textDecoration: 'none',
                      color: 'lightgreen'
                    }}>internet</Link>
                </li>
                <li className="li">
                  <Link
                    to='/linksvoletright'
                    style={{
                      textDecoration: 'none',
                      color: 'lightgreen'
                    }}>Client-Serveur</Link>
                </li>
                <li className="li">
                  <Link
                    to='/linksvoletright'
                    style={{
                      textDecoration: 'none',
                      color: 'lightgreen'
                    }}>Internet Protocol</Link>
                </li>
                <li className="li">
                  <Link
                    to='/linksvoletright'
                    style={{
                      textDecoration: 'none',
                      color: 'lightgreen'
                    }}>Request - Response</Link>
                </li>

                <li className="li">
                  <Link
                    to='/linksvoletright'
                    style={{
                      textDecoration: 'none',
                      color: 'lightgreen'
                    }}>SSH - SCP</Link>
                </li>

                <li className="li">
                  <Link
                    to='/linksvoletright'
                    style={{
                      textDecoration: 'none',
                      color: 'lightgreen'
                    }}>HTTP - HTTPS</Link>
                </li>
                <li className="li">
                  <Link
                    to='/linksvoletright'
                    style={{
                      textDecoration: 'none',
                      color: 'lightgreen'
                    }}>Fire-Wall</Link>
                </li>
                <li className="li">
                  <Link
                    to='/linksvoletright'
                    style={{
                      textDecoration: 'none',
                      color: 'lightgreen'
                    }}>Proxy - VPN</Link>
                </li>
              </section>
            </div>
          </div>
          ) : (
          <div className="volet--R2">
            <div className="subvolet--R2">
              <button onClick={this.props.handleVoletsRight}>X</button>
              <p>Volet R 2</p>
            </div>
          </div>
          )
        }
      </div>
    )
  }
}
