import { Component } from 'react'
import { Link } from 'react-router-dom'
import './styleComponents/NavBar.scss'


export default class NavBar extends Component {
  render() {
    return(
      <div className="div--headernav">
        <nav >
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/chat'>Chat</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}