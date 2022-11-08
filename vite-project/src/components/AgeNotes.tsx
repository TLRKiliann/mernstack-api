import { Component } from 'react'
import { notesType } from '../Models/notesType'

export default class AgeNotes extends Component<notesType> {
  constructor(props:any) {
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