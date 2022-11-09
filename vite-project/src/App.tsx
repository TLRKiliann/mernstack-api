import {Component} from 'react'
import {db_notes} from './notes/db_notes'
import Header from './components/Header'
import MainTitle from './components/MainTitle'
import MainComp from './components/MainComp'
import Review from './components/Review'
import Footer from './components/Footer'
import './App.scss'

export default class App extends Component<{}> {
  state = {
    notes: [],
    textHeader: "Text Header",
    secondTextHeader: "MY SECOND TEXT HEADER"
  }

  componentDidMount() {
    console.log("Mounted !")
    this.setState({notes: db_notes})
  }

  render() {
    console.log(this.state.notes)
    return(
      <div>
        <div className="wallIntro">
          <h1>Wellcome To ChatRoom !</h1>
        </div>
        
        <div className="btn--voletsLeft">
          <button>
            Click me(L)
          </button>
        </div>
        <div className="btn--voletsRight">
          <button>
            Click me(R)
          </button>
        </div>

        <Header />
        <MainTitle
          textHeader={this.state.textHeader}
          secondTextHeader={this.state.secondTextHeader}
        />

        <MainComp notes={this.state.notes} />

        <Review result={this.state.notes} />

        <Footer />

      </div>
    )
  }
}