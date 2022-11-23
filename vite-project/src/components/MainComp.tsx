import React from 'react'
import { userType } from '../models/userType';
import rebeka from '../assets/rebeka_smile.jpg'
import jeanne from '../assets/jeanne_smile.jpg'
import paula from '../assets/paula_smile.jpg'
import celestine from '../assets/celestine_smile.jpg'
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
                  <img
                    src={rebeka}
                    width="40px"
                    height="40px"
                    className="img--connector"
                    alt={rebeka}
                  />
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