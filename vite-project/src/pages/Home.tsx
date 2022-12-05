import { Component } from 'react'
import { db_users } from '../models/db_users'
import { UserType } from '../models/usertype'
import { db_computers } from '../models/db_computers'
import { computerType } from '../models/computerType'
import MainTitle from '../components/MainTitle'
import MainComp from '../components/MainComp'
import Footer from '../components/Footer'
import VoletRight from './volets/VoletRight'
import VoletLeft from './volets/VoletLeft'
import cool from '../assets/coolnection.jpg'
import '../stylePages/Home.scss'

type DataAllType = {
  db_users: UserType[]
}

export default class Home extends Component<DataAllType> {
  state = {
    users: [],
    computers: [],
    textHeader: "Login and Chat",
    secondTextHeader: "Only for StackSociety members",
    isOpenRight: false,
    isOpenL: false
  }

  componentDidMount() {
    this.setState({users: db_users})
    this.setState({computers: db_computers})
  }

  handleVoletsRight = () => {
    this.setState({isOpenRight: !this.state.isOpenRight})
  }

  handleVoletsLeft = () => {
    this.setState({isOpenL: !this.state.isOpenL})
  }

  render() {
    return(
      <div className="div--home">

        <div>
          <img
            src={cool}
            width="100%"
            height="100%"
            className="img--home"
            alt={cool}
          />
        </div>

        <div className="wallIntro">
          <h1 className="wallIntro--h1">Chat-Room for StackSociety</h1>
        </div>
        
        {!this.state.isOpenRight && <div className="div--voletsRight">
            <button
              onClick={this.handleVoletsRight}
              className="btn--voletRight"
            >
              Computing
            </button>
          </div>
        }

        {!this.state.isOpenL && <div className="div--voletsLeft">
            <button
              onClick={this.handleVoletsLeft}
              className="btn--voletLeft"
            >
              Chat-Room
            </button>
          </div>
        }

        <div className="animation--alternrota">
          <div className="webdevanim">
            <h1>Chat-Room</h1>
          </div>

          <div className="computinganim">
            <h1>Computing</h1>
          </div>
        </div>

        <VoletRight
          computers={this.state.computers}
          isOpenRight={this.state.isOpenRight}
          handleVoletsRight={this.handleVoletsRight}
        />

        <VoletLeft
          users={this.state.users}
          isOpenL={this.state.isOpenL}
          handleVoletsLeft={this.handleVoletsLeft} 
        />

        <MainTitle
          textHeader={this.state.textHeader}
          secondTextHeader={this.state.secondTextHeader}
        />

        <MainComp users={this.state.users} />

        <Footer />

      </div>
    )
  }
}

/*
        <div className="div--imgbg">
          <img
            src={bgImg}
            width="100%"
            height="100%"
            className='img--bg'
            alt='no bg'
          />
        </div>
*/