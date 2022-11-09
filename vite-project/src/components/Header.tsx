import {Component} from 'react'
import './Header.scss'

export default class Header extends Component {
  render() {
    return(
      <div className="div--headernav">
        <nav>
          <ul>
            <li>
              Main
            </li>
            <li>
              Documents
            </li>
            <li>
              Quiz
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}