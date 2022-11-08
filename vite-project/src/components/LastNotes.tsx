import { Component } from 'react'
import notesType from './Model/notesType'

export default class LastNotes extends Component<notesType> {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        Hello Last ! {this.props.lastname}
      </div>
    )
  }
}