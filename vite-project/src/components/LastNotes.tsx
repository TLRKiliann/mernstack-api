import { Component } from 'react'
import {notesType} from '../Models/notesType'
import SubLastComp from './last/SubLastComp'

export default class LastNotes extends Component<notesType> {
  constructor(props:any) {
    super(props)
  }
  render() {
    return(
      <div>
        1 - Hello Last ! {this.props.lastname}
        <SubLastComp subLastname={this.props.lastname}/>
      </div>
    )
  }
}