import React from 'react'
import { userType } from '../models/userType';
import './styleComponents/MainComp.scss'

interface MainCompProps {
  users: userType[]
}

const MainComp: React.FC = (props: MainCompProps) => {

  return(
    <div className="master--maincomp">

      <div className="submaster--maincomp">
          
        <div className="bg--colormaincomp">

          <h2 className='h2--maincomp'>
            Member Connected !
          </h2>

          <div>

            {props.users.slice(0, 10).map(user => (
              <div key={user.id}>
              {user.isConnected ? (
                <div className="div--connection">
                  {user.firstName} {user.lastName} :&nbsp;
                    <div 
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        color: 'lightgreen'
                      }}>
                      "Connected"
                    </div>
                </div>
                ) : null
              }
              </div>
              ))
            }

          </div>
        </div>

      </div>
    </div>
  )
}

export default MainComp