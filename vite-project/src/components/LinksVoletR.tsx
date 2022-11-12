import { Component } from 'react'
import { db_notes } from '../notes/db_notes'
import { notesType } from '../notes/notestype'
import './LinksVoletR.scss'

//react-router-dom with id
//

export default class LinksVoletR extends Component<notesType> {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      newNotes: []
    }
  }
  
  componentDidMount() {
    console.log("Mounted -2- !")
    this.setState({notes: db_notes})
  }

  render() {
    //console.log("all props", this.state.notes)
    //console.log(this.state.newNotes)
    return(
      <div className="linksvoletright">
        <h1>I'm left volet link !</h1>
        {this.state.notes.map(n => (
          <span key={n.id} style={{color: 'white'}}>{n.id ? n.firstName : null}</span>
          ))
        }
      </div>
    )
  }
}