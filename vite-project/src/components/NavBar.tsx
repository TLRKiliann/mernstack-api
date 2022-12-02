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


        {username ? (
          <span 
            style={{
              margin: "0px 20px",
              padding: "10px",
              fontFamily: "Consolas",
              textShadow: "1px 1px 1px purple",
              background: "steelblue",
              borderRadius: "10px",
              boxShadow: "0px 3px 5px grey",
              color: "white"
            }}
          >
            {username}
          </span>

          ) : (
          
          <span
            style={{
              margin: "0px 20px",
              padding: "10px",
              background: "red",
              borderRadius: "10px",
              color: "white"
            }}> &#8614; </span>
          )}

        {switchLogin ? (
          <li><Link
            to="/login"
            style={{
              marginRight: "20px",
              width: "55px", 
              height: "55px", 
              position: "relative", 
              display: "flex", 
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Consolas",
              fontSize: "0.9rem",
              textShadow: "1px 1px 1px white",
              background: "whitesmoke",
              color: "black", 
              border: "1px solid grey",
              borderRadius: "50%"
            }}

          >
            Login
          </Link></li>

          ) : (
          
          <li><Link
            to="/login"
            onClick={() => handleChange()}
            style={{
              marginRight: "20px",
              width: "55px", 
              height: "55px", 
              position: "relative", 
              display: "flex", 
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Consolas",
              fontSize: "0.8rem",
              color: "black", 
              border: "1px solid grey",
              borderRadius: "50%",
            }}

          >
            Logout
          </Link></li>
        )}

      </nav>
    </div>
  )
}

export default NavBar