import React from 'react'
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

  return(
    <div>
      {props.isOpenL ? (
        <div className="volet--L">
          <div className="subvolet--L">
            <button onClick={props.handleVoletsLeft}>X</button>
            <p>Users State Connection</p>
              
            <span className="span">
              <BsFillChatDotsFill size={64}/>
            </span>

            <section className="section--voletl">
              {props.users.map(user => (
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
                    to={`/chatuser/${user.id}`}
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
            <button onClick={props.handleVoletsLeft}>X</button>
            <p>Users State Connection</p>

            <span className="span">
              <BsFillChatDotsFill size={64}/>
            </span>

            <section className="section--voletl">
              {props.users.map(user => (
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
                    to={`/chatuser/${user.id}`}
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