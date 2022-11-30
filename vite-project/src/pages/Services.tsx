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

  addUserById = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    console.log(id, "id")
  }

  render() {
    return(
      <div className="saloon--byusers">

        <div className="title--services">
          <h1>Rooms</h1>
        </div>

        <div className="divsection--saloon">
          
        {Object.values(this.state.computers)?.slice(0, 12).map(computer =>
          <section key={computer.id} className="section--saloon">
            <h3 className="titlebyroom">{computer.title}</h3>

            {Object.values(this.state.users)?.map(user =>
              <span key={user.id} className="span--saloon">
                {user.mainroom === computer.title ? (
                  <div className="user--imgsaloon">
                    <img
                      width="40px"
                      height="40px"
                      src={user.img} 
                      className="img--saloon"
                    />
                    <p style={{fontSize: '16px'}}>
                    {user.firstName} {user.isConnected ? (
                      <span
                        style={{
                          color: 'lightgreen',
                          marginLeft: "5px"
                        }}
                      >
                        ✔
                      </span>
                      ):(
                      <span
                        style={{
                          color: 'lightgreen',
                          marginLeft: "5px",
                          fontSize: "12px"
                        }}
                      >
                        ❌
                      </span>
                      ) 
                    }
                    </p>
                    <span
                      onClick={(e) => console.log(e.target)}
                      className="askprivate--service"
                      title="Invite to private chat"
                    >
                      ✉
                    </span>
                    <span className="lastspan--service">
                      <button
                        onClick={(e) => console.log(e.target)}
                        className="btn--lastspanservice"
                        title="Add as Your Friend"
                      >
                        +
                      </button>
                    </span>
                  </div>
                  ) : null
                }
              </span>
              )}
          </section>
        )}
        </div>
      </div>
    )
  }
}