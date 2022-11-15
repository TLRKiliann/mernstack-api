import { Component } from 'react'
import { db_notes } from '../notes/db_notes'
import { notesType } from '../notes/notestype'
import MainTitle from '../components/MainTitle'
import MainComp from '../components/MainComp'
import Footer from '../components/Footer'
import VoletRight from './volets/VoletRight'
import VoletLeft from './volets/VoletLeft'
import bgImg from '../assets/wallpaper_riverforest.jpg'
import '../stylePages/Home.scss'


export default class Home extends Component<notesType> {
  state = {
    notes: [],
    textHeader: "Text Header",
    secondTextHeader: "MY SECOND TEXT HEADER",
    isOpen: false,
    isLefted: false
  }

  componentDidMount() {
    console.log("Mounted !")
    this.setState({notes: db_notes})
  }

  handleVoletsRight = () => {
    console.log(this.state.isOpen)
    this.setState({isOpen: !this.state.isOpen})
  }

  handleVoletsLeft = () => {
    console.log(this.state.isLefted)
    this.setState({isLefted: !this.state.isLefted})
  }

  render() {
    //console.log(this.state.notes)
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
        
        {this.state.isOpen ? null : (
          <div className="btn--voletsRight">
            <button onClick={this.handleVoletsRight}>
              Chat-Computer
            </button>
          </div>
          )
        }

        {this.state.isLefted ? null : (
          <div className="btn--voletsLeft">
            <button onClick={this.handleVoletsLeft}>
              Chat-Room
            </button>
          </div>
          )
        }

        <div className="animation--alternrota">
          <div className="webdevanim">
            <h1>Chat-Room</h1>
          </div>

          <div className="computinganim">
            <h1>Chat-Computing</h1>
          </div>
        </div>

        <VoletRight
          isOpen={this.state.isOpen}
          handleVoletsRight={this.handleVoletsRight}
        />

        <VoletLeft
          notes={this.state.notes}
          isLefted={this.state.isLefted}
          handleVoletsLeft={this.handleVoletsLeft} 
        />

        <MainTitle
          textHeader={this.state.textHeader}
          secondTextHeader={this.state.secondTextHeader}
        />

        <MainComp notes={this.state.notes} />

        <Footer />

      </div>
    )
  }
}