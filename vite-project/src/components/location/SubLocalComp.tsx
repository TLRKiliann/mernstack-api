import { Component } from 'react'
import notesType from './Model/notesType'

export default class SubLocalComp extends Component<notesType> {
  constructor(props) {
    super(props)
    this.handleColor = {color: 'lightgreen', border: '1px solid lightgreen'}
  }

  render() {
    //console.log(this.props.subLocation)
    return(
      <div style={this.handleColor}>
        2 - SubComponent subLocation: {this.props.subLocation}
      </div>
    )
  }
}