import { Component } from 'react'
import './styleComponents/Footer.scss'

export default class Footer extends Component {
  render() {
    return(
      <div className="div--navfooter">
        <nav className="navbar--nav">
          <ul className="navbar--ul">
            <li className="navbar--li">
              Contact
            </li>
            <li className="navbar--li">
              Info
            </li>
            <li className="navbar--li">
              Sponsors
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}