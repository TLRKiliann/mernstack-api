import React from 'react'
import { userType } from '../models/userType';
import './styleComponents/MainComp.scss'

interface MainCompProps {
  users: userType[]
}

const MainComp: React.FC = (props: MainCompProps) => {
  console.log(props.users, 'users')
  console.log(typeof(props.users), 'type users')
  return(
    <div className="master--maincomp">
          
      <div className="bg--colormaincomp">

        <h2 className='h2--maincomp'>
          All Members :&nbsp;
          <span className="span--lengthuser">
            {props.users?.length}
          </span>
        </h2>
        
        <h3 className="h3--maincomp">
          Users online (connected) :&nbsp;
          <span
            style={{color:'pink'}}
          >
            {props.users?.reduce((prev, curr) =>
            prev + curr.isConnected, 0)}
          </span>
        </h3>

        <div>
          {props.users?.slice(0, `${props.users?.length}`).map(user => (
            <div key={user.id}>
            {user.isConnected ? (
              <div className="div--connection">
                <img
                  src={user.img}
                  width="40px"
                  height="40px"
                  className="img--connector"
                  alt={user.img}
                />
                {user.firstName} {user.lastName} :&nbsp;
                  <div 
                    className="data--maincomp"
                  >
                    Connected
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
  )
}

export default MainComp