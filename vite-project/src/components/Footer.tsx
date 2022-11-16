import { Component } from 'react'
import './styleComponents/Footer.scss'


export default class Footer extends Component {
  render() {
    return(
      <div className="div--navfooter">
        <nav>
          <ul>
            <li>
              Contact
            </li>
            <li>
              About US
            </li>
            <li>
              Rules
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}