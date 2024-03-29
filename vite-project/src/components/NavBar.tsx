import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { useAuthLogin } from '../context/AuthProvider'
import koalatree from '../assets/logo/koala_tree.png'
import './styleComponents/NavBar.scss'


const NavBar: React.FC = () => {

  const { switchLogin, username, toggle, eraseAll, changeStatusUser } = useAuthLogin()

  const handleChange = () => {
    toggle()
    eraseAll()
  }

  return(
    <div data-testid="testId" className="div--headernav">
      <nav className="navbar--nav">

        <div className="div--imgnavbar">
          <img
            src={koalatree}
            width="65px"
            height="70px"
            className="img--koala"
            alt='no-img-navbar'
          />
        </div>

        <ul className="ul--navbar">
          <li>
            <Link
              data-testid="firstLink"
              className="link--tagnav"
              to='/'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              data-testid="secondlink"
              className="link--tagnav"
              to='/profile'
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              data-testid="thirdlink"
              className="link--tagnav"
              to='/online'
            >
              Online
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
              <p className="p--navbarlogin">
                <Link
                  data-testid="loginLink"
                  to="/login"
                  className="link--logintag"
                >
                  Login
                </Link>
              </p>

              ) : (
              
              <span className="span--navbarlogin">
                <Link
                  data-testid="linkLogout"
                  to="/login"
                  onClick={handleChange}
                  className="link--logout"
                >
                  Logout
                </Link>
              </span>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar