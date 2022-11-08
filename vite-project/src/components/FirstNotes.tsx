import { Component } from 'react'
import notesType from './Model/notesType'

export default class FirstNotes extends Component<notesType> {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        Hello First ! {this.props.name}
      </div>
    )
  }
}