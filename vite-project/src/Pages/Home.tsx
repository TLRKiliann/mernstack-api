import {Component} from 'react'
import {db_notes} from '../notes/db_notes'
import {notesType} from '../notes/notestype'
//import Header from '../components/Header'
import MainTitle from '../components/MainTitle'
import MainComp from '../components/MainComp'
import Review from '../components/Review'
import Footer from '../components/Footer'
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
    console.log(this.state.notes)
    return(
      <div>
        <div className="wallIntro">
          <h1>Wellcome To ChatRoom !</h1>
        </div>
        
        <div className="btn--voletsLeft">
          <button onClick={this.handleVoletsLeft}>
            Click me(L)
          </button>
        </div>
        <div className="btn--voletsRight">
          <button onClick={this.handleVoletsRight}>
            Click me(R)
          </button>
        </div>


        {this.state.isClosed ? (
          <div className="volet--R">
            <div className="subvolet--R">
              <button onClick={this.handleVoletsRight}>X</button>
              <p>Volet R 1</p>
            </div>
          </div>
          ) : (
          <div className="volet--R2">
            <div className="subvolet--R2">
              <button onClick={this.handleVoletsRight}>X</button>
              <p>Volet R 2</p>
            </div>
          </div>
          )
        }


        {this.state.isLefted ? (
          <div className="volet--L">
            <div className="subvolet--L">
              <p>Volet L 1</p>
              <button onClick={this.handleVoletsLeft}>Close</button>
            </div>
          </div>
          ) : (
          <div className="volet--L2">
            <div className="subvolet--L2">
              <p>Volet L 2</p>
              <button onClick={this.handleVoletsLeft}>Close</button>
            </div>
          </div>
          )
        }

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