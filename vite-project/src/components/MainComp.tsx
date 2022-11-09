import { Component } from 'react'
import {notesType} from '../../notes/notesType'


export default class MainComp extends Component<notesType> {
  mainColor = {
    width: '600px',
    margin: 'auto',
    marginTop: '40px',
    padding: '20px 40px',
    fontSize: '1.2rem',
    background: '#161616',
    color: 'lightgreen'
  };
  render() {
    return(
      <div style={this.mainColor}>
        <h2 style={{textAlign: 'center'}}>
          All Members !
        </h2>
        <div>
        {this.props.notes.map(note => (
          <p key={note.id}>
            {note.firstName} {note.lastName} - {note.age} ans - {note.gender}
          </p>
          ))
        }
        </div>
        <span>

        </span>
      </div>
    )
  }
}