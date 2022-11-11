import { Component } from 'react'
import { db_notes } from '../notes/db_notes'
import { notesType } from '../notes/notestype'
//import Header from '../components/Header'
import MainTitle from '../components/MainTitle'
import MainComp from '../components/MainComp'
import Review from '../components/Review'
import Footer from '../components/Footer'
import VoletRight from './Volets/VoletRight'
import VoletLeft from './Volets/VoletLeft'
import '../stylePages/Home.scss'


export default class Home extends Component<notesType> {
  state = {
    notes: [],
    textHeader: "Text Header",
    secondTextHeader: "MY SECOND TEXT HEADER",
    isClosed: false,
    isLefted: false
  }

  componentDidMount() {
    console.log("Mounted !")
    this.setState({notes: db_notes})
  }

  handleVoletsRight = () => {
    console.log(this.state.isClosed)
    this.setState({isClosed: !this.state.isClosed})
  }

  handleVoletsLeft = () => {
    console.log(this.state.isLefted)
    this.setState({isLefted: !this.state.isLefted})
  }

  render() {
    //console.log(this.state.notes)
    return(
      <div>
        <div className="wallIntro">
          <h1>Wellcome To Chat-Room !</h1>
        </div>
        
        <div className="btn--voletsLeft">
          <button onClick={this.handleVoletsLeft}>
            Chat-Room Assistance
          </button>
        </div>
        <div className="btn--voletsRight">
          <button onClick={this.handleVoletsRight}>
            Chat-Room Computing
          </button>
        </div>

        <VoletRight
          isClosed={this.state.isClosed}
          handleVoletsRight={this.handleVoletsRight}
        />

        <VoletLeft 
          isLefted={this.state.isLefted}
          handleVoletsLeft={this.handleVoletsLeft} 
        />

        <MainTitle
          textHeader={this.state.textHeader}
          secondTextHeader={this.state.secondTextHeader}
        />

        <MainComp notes={this.state.notes} />

        <Review results={this.state.notes} />

        <Footer />

      </div>
    )
  }
}