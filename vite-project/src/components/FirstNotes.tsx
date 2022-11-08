import { Component } from 'react'
import {notesType} from '../Models/notesType'

export default class FirstNotes extends Component<notesType> {
  constructor(props:any) {
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