import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { db_users } from '../../models/db_users'
import { userType } from '../../models/userType'
import './PrivateMessage.scss'


const PrivateMessage: React.FC = () => {

  const [users, setUsers] = useState<Array<userType>>([])
  const [newNames, setNewNames] = useState<{firstName?: string}>("")
  //console.log(typeof newNames, "state")

  const retrieveFirst = useParams<{firstName?: string}>("");
  //console.log(typeof retrieveFirst, "useParams")

  useEffect(() => {
    setUsers(db_users)
    setNewNames(retrieveFirst)
  }, [])

  return(
    <div className="private--chat">

      <h2 className="title--privatechat">
        {Object.values(newNames)}
      </h2>

      <div className="private--terminal">
        <div className="sub--privateterminal">
          <h3>Talk with {Object.values(newNames)}</h3>
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

