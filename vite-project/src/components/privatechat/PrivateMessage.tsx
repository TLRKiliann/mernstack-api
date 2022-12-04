import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { db_users } from '../../models/db_users'
import { UserType } from '../../models/usertype'
import './PrivateMessage.scss'

interface PrivateProps {
  firstName: object
}

const PrivateMessage: React.FC = ({firstName: PrivateProps}) => {

  const retrieveFirst = useParams<{firstName?: string}>("");

  const [users, setUsers] = useState<Array<UserType>>([])
  const [newNames, setNewNames] = useState<{firstName?: string}>({retrieveFirst})
  const [displayName, setDisplayName] = useState<Arrayy<string>>([])

  useEffect(() => {
    setUsers(db_users)
    setNewNames({retrieveFirst})
    handleSearchUser()
  }, [])

  const handleSearchUser = () => {
    const [arr] = Object.values(newNames)
    const truc = arr

    const findByFirstName = users?.map(user => user).filter(user => {
      return user.firstName === truc.firstName
        ? `${user.firstName} ${user.lastName} ${user.age} ${user.email}`
        : null
    })
    if (findByFirstName === "") {
      setDisplayName([]);
    } else {
      setDisplayName(findByFirstName)
    }
  };

  return(
    <div className="private--chat">

      <h1 className="title--privatechat">
        Private Chat
      </h1>

      <div className="private--terminal">
        <div className="sub--privateterminal">
          {displayName.map(display => (
            <div key={display.id} className="flex--imgnameroom">
              <img
                src={display.img}
                width="95px"
                height="65px"
                className="img--private"
                alt="no img"
              />
              <h4 className="title--private">{display.firstName}</h4>
              <h4 className="title--private">{display.lastName}</h4>
              <h4 className="title--private">{display.age} years</h4>
              <h4 className="title--private">{display.email}</h4>
              <h4 className="title--private">{display.isConnected ? (
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
              </h4>
            </div>
            ))}
        </div>

        <div className="private--messagebox">

        </div>

        <div className="inputbtn--privateterminal">
          <input
            type="text"
            placeholder="Enter your message"
          />
          <button
            type="button"
            className="private--btn"
          >
            Enter
          </button>
        </div>
      </div>

    </div>
  )
}

export default PrivateMessage

