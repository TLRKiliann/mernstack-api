import { Component } from 'react'
import { db_users } from '../models/db_users'
import { userType } from '../models/userType'
import { db_computers } from '../models/db_computers'
import { computerType } from '../models/computerType'
import MainTitle from '../components/MainTitle'
import MainComp from '../components/MainComp'
import Footer from '../components/Footer'
import VoletRight from './volets/VoletRight'
import VoletLeft from './volets/VoletLeft'
import bgImg from '../assets/wallpaper_riverforest.jpg'
import '../stylePages/Home.scss'


export default class Home extends Component {
  state = {
    users: [],
    computers: [],
    textHeader: "Text Header",
    secondTextHeader: "MY SECOND TEXT HEADER",
    isOpenRight: false,
    isOpenL: false
  }

  componentDidMount() {
    console.log("Mounted !")
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
    //console.log(this.state.users)
    return(
      <div>
        <div className="div--imgbg">
          <img
            src={bgImg}
            width="100%"
            height="100%"
            className='img--bg'
            alt='no bg'
          />
        </div>

        <div className="wallIntro">
          <h1>Wellcome To Chat-Room !</h1>
        </div>
        
        {!this.state.isOpenRight && <div className="btn--voletsRight">
            <button onClick={this.handleVoletsRight}>
              Computing
            </button>
          </div>
        }

        {!this.state.isOpenL && <div className="btn--voletsLeft">
            <button onClick={this.handleVoletsLeft}>
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