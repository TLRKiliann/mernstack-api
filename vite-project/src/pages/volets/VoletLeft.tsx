import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdConnectWithoutContact } from 'react-icons/md'
import { TbPlugConnected } from 'react-icons/tb'
import { BsFillChatDotsFill } from 'react-icons/bs'
import './VoletLeft.scss'


interface VoletLeftProps {
  isOpenL: boolean
  handleVoletsLeft: () => void
}

const VoletLeft: React.FC = (props: VoletLeftProps) => {

  const [searchUser, setSearchUser] = useState<Array<string>>([])
  const [userFound, setUserFound] = useState<Array<string>>([])
  //console.log(searchUser)

  const handleSearchInput = (e: React.ChangeEvent<HTMLIputElement>): void => {
    setSearchUser(e.target.value)
  }

  const handleSearchUser = (e: React.MouseEvent<HTMLButtonElement>) => {
    const findByFirstName = props.users?.map(user => user).filter(user => {
      return user.firstName === searchUser
        ? `${user.firstname} ${user.lastName}`
        : null
    })
    e.preventDefault();
    if (searchUser === "") {
      setSearchUser("");
      alert("User undefined or not existing...")
    } else {
      setUserFound(findByFirstName)
      setSearchUser("")
    }
  };

  return(
    <div>
      {props.isOpenL ? (
        <div className="volet--L">
          <div className="subvolet--L">
            <button 
              className="btn--volet"
              onClick={props.handleVoletsLeft}>X</button>
            <p>Private Chat</p>
              
            <span className="span">
              <BsFillChatDotsFill size={64}/>
            </span>

            <div className="form--search">
              <input
                type="text"
                value={searchUser}
                onChange={(e) => handleSearchInput(e)}
                placeholder="Search by firstname"
                className="search--input"
              />
              <button
                onClick={handleSearchUser}
                className="btn--search"
              >
                Enter
              </button>
            </div>

            
            <div className="result--search">
            {userFound?.map(userFirst => (
              <p key={userFirst.id}
                className="result--searchp">{userFirst.firstName} {userFirst.lastName} 
                <span 
                  style={userFirst.isConnected ? {color: 'lightgreen'} 
                    : {color: 'orange'}}
                >
                  &nbsp;{userFirst.isConnected ? "Connected" : "No Connected"}
                </span>
              </p>
            ))}
            </div>


            <section className="section--voletl">
              {props.users?.map(user => (
                <li key={user.id} className="li"
                  style={user.isConnected 
                  ? {color: 'lightgreen'}
                  : {color: 'orange'}}
                >
                  {user.isConnected ? (
                    <MdConnectWithoutContact
                      size={24}
                      style={{
                        marginRight: '10px',
                      }}
                    />
                    ) : (
                    <TbPlugConnected
                      size={24}
                      style={{marginRight: '10px'}}
                    />
                    )
                  }
                  <Link className="link--tagvoletl"
                    to={`/computerroom/privatemessage/${user.firstName}`}
                  >
                    {user.firstName} {user.lastName}
                  </Link>
                </li>
                ))
              }
            </section>
          
          </div>
        </div>
        
        ) : (

        <div className="volet--L2">
          <div className="subvolet--L2">
            <button
              className="btn--volet"
              onClick={props.handleVoletsLeft}>X</button>
            <p>Users State Connection</p>

            <span className="span">
              <BsFillChatDotsFill size={64}/>
            </span>

            <div className="form--search">
              <input
                type="text"
                value={searchUser}
                onChange={(e) => handleSearchInput(e)}
                placeholder="Search by firstname"
                className="search--input"
              />
              <button
                onClick={handleSearchUser}
                className="btn--search"
              >
                Enter
              </button>
            </div>

            <section className="section--voletl">
              {props.users?.map(user => (
                <li key={user.id} className="li">
                  {user.isConnected ? (
                    <MdConnectWithoutContact
                      size={24}
                      style={{marginRight: '10px'}}
                    />
                    ) : (
                    <TbPlugConnected
                      size={24}
                      style={{marginRight: '10px'}}
                    />
                    )
                  }
                  <Link className="link--tagvoletl"
                    to={`/computerroom/privatemessage/${user.firstName}`}
                  >
                    {user.firstName} {user.lastName}
                  </Link>
                </li>
                ))
              }
            </section>

          </div>
        </div>
        )
      }
    </div>
  )
}

export default VoletLeft