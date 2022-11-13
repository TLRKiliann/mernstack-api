import { Component } from 'react'
import { Link } from 'react-router-dom'
import { MdConnectWithoutContact } from 'react-icons/md'
import { TbPlugConnected } from 'react-icons/tb'
import { BsFillChatDotsFill } from 'react-icons/bs'
import mother from '../../assets/motherboard.png'
import './VoletLeft.scss'


interface VoletLeftProps {
  isLefted: boolean
  handleVoletsRight: () => void
}

export default class VoletLeft extends Component<VoletLeftProps> {
  render() {
    return(
      <div>
        {this.props.isLefted ? (
          <div className="volet--L">
            <div className="subvolet--L">
              <button onClick={this.props.handleVoletsLeft}>X</button>
              <p>Users State Connection</p>
                
              <span className="span">
                <BsFillChatDotsFill size={64}/>
              </span>

              <section className="section--voletl">
                {this.props.notes.map(note => (
                  <li key={note.id} className="li">
                    {note.isConnected ? (
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
                      to={`/chatuser/${note.id}`}
                    >
                      {note.firstName} {note.lastName}
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
              <button onClick={this.props.handleVoletsLeft}>X</button>
              <p>Users State Connection</p>

              <span className="span">
                <BsFillChatDotsFill size={64}/>
              </span>

              <section className="section--voletl">
                {this.props.notes.map(note => (
                  <li key={note.id} className="li">
                    {note.isConnected ? (
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
                      to={`/chatuser/${note.id}`}
                    >
                      {note.firstName} {note.lastName}
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
}
