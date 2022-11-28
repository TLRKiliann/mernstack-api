import { Component } from 'react'
import { db_users } from '../models/db_users'
import { userType } from '../models/userType'
import { db_computers } from '../models/db_computers'
import { computerType } from '../models/computerType'
import '../stylePages/Services.scss'


export default class Services extends Component {
  state = {
    users: [],
    computers: []
  }

  componentDidMount() {
    this.setState({users: db_users})
    this.setState({computers: db_computers})
  }

  render() {
    //console.log(this.state.users)
    //console.log(this.state.computers)
    return(
      <div className="saloon--byusers">

        <div className="title--services">
          <h1>Rooms</h1>
        </div>

        <div className="divsection--saloon">
          
        {Object.values(this.state.computers).slice(0, 12).map(computer =>
          <section key={computer.id} className="section--saloon">
            <h3 className="titlebyroom">{computer.title}</h3>

            {Object.values(this.state.users).map(user =>
              <span key={user.id} className="span--saloon">
                {user.room === computer.title && user.isConnected 
                  ? <div className="user--imgsaloon">
                      <img
                        width="40px"
                        height="40px"
                        src={user.img} 
                        className="img--saloon"
                      />
                      <p>
                      {user.firstName} {user.isConnected 
                        && <span
                            style={{
                              color: 'lightgreen',
                              marginLeft: "5px"
                            }}
                          >
                            ✔
                          </span> 
                      }
                      </p>
                    </div>
                  : null}
              </span>
            )}
          </section>
        )}
        </div>
      </div>
    )
  }
}