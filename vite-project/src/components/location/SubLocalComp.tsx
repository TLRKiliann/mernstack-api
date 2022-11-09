import { Component } from 'react'
import {notesType} from '../../Models/notesType'

export default class SubLocalComp extends Component<notesType> {
  constructor(props:any) {
    super(props)
  }
  handleColor = {color: 'lightgreen', border: '1px solid lightgreen'}
  render() {
    //console.log(this.props.subLocation)
    return(
      <div style={this.handleColor}>
        2 - Reusable subLocation: {this.props.subLocation}
      </div>
    )
  }
}