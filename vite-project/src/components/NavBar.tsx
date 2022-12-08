import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { useAuthLogin } from '../context/AuthProvider'
import koalatree from '../assets/koala_tree.png'
import './styleComponents/NavBar.scss'


const NavBar: React.FC = () => {

  const { switchLogin, username, toggle, eraseAll } = useAuthLogin()

  const handleChange = () => {
    toggle()
    eraseAll()
  }

  return(
    <div data-test-id="testId" className="div--headernav">
      <nav className="navbar--nav">

        <div className="div--img">
          <img
            src={koalatree}
            width='65px'
            height='70px'
            alt='no img navbar'
          />
        </div>

        <ul className="ul--navbar">
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
              to='/profile'
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              className="link--tagnav"
              to='/online'
            >
              Online
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

      <div className="div--userloginnavbar">
        <div className="div--userplace">
          {username ? (
            <span 
              className="span--navbarusername"
            >
              {username}
            </span>
            ) : (
            <span className="span--usrnavbar"> 
              &#8614;
            </span>
            )}
            </div>

            <div className="div--login">
            {switchLogin ? (
              <p className="p--navbarlogin"><Link
                to="/login"
                className="link--logintag"
              >
                Login
              </Link></p>

              ) : (
              
              <span className="span--navbarlogin"><Link
                to="/login"
                onClick={() => handleChange()}
                className="link--logout"
              >
                Logout
              </Link></span>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar