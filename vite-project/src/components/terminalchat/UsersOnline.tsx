import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { db_users } from '../../models/db_users'
import { UserType } from '../../models/usertype'
import './UsersOnline.scss'

interface UserOnlineProps {
  id: number
  roomStyle: object
  handleAskUserPrivate: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const UserOnline: React.FC = (props: UserOnlineProps) => {

  const [users, setUsers] = useState<Array<UserType>>([])

  useEffect(() => {
    setUsers(db_users)
  }, [])

  console.log(props.roomStyle, "roomStyle")
  
  return(
    <section data-testid="ptestid" className="user--online">
      <div className="div--userolinetitle">
        <h3 className="userolinetitle">Online Users</h3>
      </div>
      
        {Object.values(users)?.map((val, key) => (
          val.room === props.roomStyle && (
          <div key={key} className="all--usersbanner">   
            <div>
              <img
                src={val.img}
                width="40px"
                height="40px"
                className="smile--img"
                alt={val.img}
              /> 
            </div>
            
            <p className="para--spanchat">
              {val.firstName} {val.isConnected ? (
                <span
                  className="span--useronline"
                  style={{color: 'lightgreen'}}
                >
                  ✔
                </span>
                ) : (
                <span 
                  className="span--useronline" style={{fontSize:"12px"}}>
                  ❌
                </span>
                )
              }

              <span 
                onClick={() => props.handleAskUserPrivate(val.id)}
                className="span--useronline styleusr--span"
                style={{color: 'orange', fontSize: '20px'}}
              >
                ✉
              </span>

            </p>
          </div>
          )
        ))}
    </section>
  )
}

export default UserOnline

/*
              <Link 
                to={`/computerroom/privatemessage/${val.firstName}`}
                className="span--useronline styleusr--span"
                style={{color: 'orange', fontSize: '20px'}}
              >
                ✉
              </Link>
*/