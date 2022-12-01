import { Component } from 'react'
import { Link } from 'react-router-dom'
import koalatree from '../assets/koala_tree.png'
import './styleComponents/NavBar.scss'


export default class NavBar extends Component {
  render() {
    return(
      <div data-test-id="testId" className="div--headernav">
        <nav >

          <div className="div--img">
            <img src={koalatree} width='53px' height='58px' alt='no img navbar'/>
          </div>

          <ul>
            <li>
              <Link
                className="link--tagnav"
                to='/'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="link--tagnav"
                to='/services'
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="link--tagnav"
                to='/help'
              >
                Help
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}