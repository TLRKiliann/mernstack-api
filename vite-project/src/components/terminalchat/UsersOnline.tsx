import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { UserType } from '../models/usertype'
import './UsersOnline.scss'

interface UserOnlineProps {
  id: number | null
  user: UserType
  roomStyle: object
  handleAskUserPrivate: (id: number) => void
}

const UserOnline: React.FC = (props: UserOnlineProps) => {
  
  return(
    props.user.room === props.roomStyle && (
      <div key={props.user.id} className="all--usersbanner">   
        <div className="username--useronline">
          <img
            src={props.user.img}
            width="100%"
            height="100%"
            className="smile--img"
            alt={props.user.img}
          /> 

          <span className="useronline--username">
            {props.user.firstName}
          </span>

        </div>
        
        <p className="para--spanchat"> 
          {props.user.isConnected ? (
            <span
              className="span--useronline connector--icon"
              style={{color: 'lightgreen'}}
            >
              ✔
            </span>
            ) : (
            <span 
              className="span--useronline connector--icon"
            >
              ❌
            </span>
            )
          }

          <span
            id={props.id}
            onClick={() => props.handleAskUserPrivate(props.id)}
            className="span--useronline styleusr--span"
            style={{color: 'orange', fontSize: '22px'}}
          >
            ✉
          </span>

        </p>
      </div>
    )
  )
}

export default UserOnline
