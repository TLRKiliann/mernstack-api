import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { UserType } from '../models/usertype'
import './UsersOnline.scss'

interface UsersOnlineProps {
  id: number | null
  refreshUser: UserType
  roomStyle: object
  handleAskUserPrivate: (id: number) => void
}

const UsersOnline: React.FC = (props: UsersOnlineProps) => {
  //console.log("props", props)
  return (
    props.refreshUser?.room === props?.roomStyle && (
      <div 
        data-testid="onlinetest"
        key={props.refreshUser?.id}
        className="all--usersbanner"
      >   
        <div className="username--useronline">
          <img
            src={props.refreshUser?.img}
            width="100%"
            height="100%"
            className="smile--img"
            alt="imgusersonline"
          /> 

          <span className="useronline--username">
            {props.refreshUser?.firstName}
          </span>

        </div>
        
        <p className="para--spanchat"> 
          {props.refreshUser?.isConnected ? (
            <span
              data-testid="spanuseronlinetrue"
              className="span--useronline connector--icon"
              style={{color: 'lightgreen'}}
            >
              ✔
            </span>
            ) : (
            <span 
              className="span--useronlinefalse connector--icon"
            >
              ❌
            </span>
            )
          }

          <span
            data-testid="spantestidusers"
            id={props.refreshUser?.id}
            onClick={() => props.handleAskUserPrivate(props.refreshUser?.id)}
            className="span--useronline styleusr--span"
            style={{color: 'sandybrown', fontSize: '22px'}}
          >
            ✉
          </span>
        </p>
      </div>
    )
  )
}

export default UsersOnline
