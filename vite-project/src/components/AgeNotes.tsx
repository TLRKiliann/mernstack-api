import { Component } from 'react'
import notesType from './Model/notesType'

export default class AgeNotes extends Component<notesType> {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        Hello Age ! {this.props.age}
      </div>
    )
  }
}