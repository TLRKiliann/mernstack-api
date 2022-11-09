import { Component } from 'react'
import { notesType } from './Models/notesType'
import { Notes } from './Notes'
import FirstNotes from './components/FirstNotes'
import LastNotes from './components/LastNotes'
import AgeNotes from './components/AgeNotes'
import LocalNotes from './components/LocalNotes'
import DerivedLocalNotes from './components/location/DerivedLocalNotes'
import './App.scss'


class App extends Component<{}> {
  constructor(props:any) {
    super(props)
    this.state = {
      Notes: [],
      childNote: "My First child (1x)",
      secondChildNote: "It's my second child (2x)",
      childNoteExtend: ["t's thirdth child (3x)", "Ok cool 3x! It's my third child list"]
    }
  }

  componentDidMount() {
    this.setState({Notes})
    console.log("Mounted !")
  }

  render() {
    return (
      <div className="App">
        <h1>Notes MERN-stack API</h1>
        {this.state.Notes.map(note => (
          <div key={note.id} style={{border: "1px solid orange"}}>
            <FirstNotes
              name={note.name}
            />
            <LastNotes
              lastname={note.lastname}
            />
            <AgeNotes
              age={note.age}
            />

            <LocalNotes
              location={note.location}
            />
            
            <LocalNotes location={note.location}>
              <DerivedLocalNotes>
                {this.state.childNote} {this.state.secondChildNote} {this.state.childNoteExtend}
              </DerivedLocalNotes>
            </LocalNotes>

            <LocalNotes location={note.location}>
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
