import { Component } from 'react'
import notesType from './Model/notesType'
import {Notes} from './notesModel'
import FirstNotes from './components/FirstNotes'
import LastNotes from './components/LastNotes'
import AgeNotes from './components/AgeNotes'
import LocalNotes from './components/LocalNotes'
import './App.scss'


class App extends Component<notesType> {
  state = {
    Notes: []
  }

  componentDidMount() {
    this.setState({Notes})
    console.log("Mounted !")
  }

  render() {
    return (
      <div className="App">
        <h1>Notes MERN-stack API</h1>
        {this.state.Notes.map(n => (
          <div key={n.id} style={{border: "1px solid orange"}}>
            <FirstNotes
              name={n.name}
            />
            <LastNotes
              lastname={n.lastname}
            />
            <AgeNotes
              age={n.age}
            />
            <LocalNotes
              location={n.location}
            />
          </div>
          ))
        }
      </div>
    )
  }
}

export default App
