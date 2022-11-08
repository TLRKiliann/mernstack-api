import { Component } from 'react'
import notesType from './Model/notesType'
import {Notes} from './notesModel'
import FirstNotes from './components/FirstNotes'
import LastNotes from './components/LastNotes'
import AgeNotes from './components/AgeNotes'
import LocalNotes from './components/LocalNotes'
import DerivedLocalNotes from './components/DerivedLocalNotes'
import './App.scss'

interface childTypes {
  childNote: string
  secondChildNote: string
  childNoteExtend: Array<string>
}

class App extends Component<notesType, childTypes> {
  state = {
    Notes: [],
    childNote: "Ok cool! (It's a child)",
    secondChildNote: "Ok cool 2x! (It's my second child)",
    childNoteExtend: ["Ok cool! (It's a child)", "Ok cool 2x! (It's my second child)"]
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
            
            <LocalNotes location={n.location}>
              <DerivedLocalNotes>
                {this.state.childNote}
              </DerivedLocalNotes>
            </LocalNotes>

            <LocalNotes location={n.location}>
              <DerivedLocalNotes>
                {this.state.childNoteExtend}
              </DerivedLocalNotes>
            </LocalNotes>

          </div>
          ))
        }
      </div>
    )
  }
}

export default App
