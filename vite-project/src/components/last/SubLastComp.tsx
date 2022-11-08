import { Component } from 'react'
import notesType from './Model/notesType'

export default class SubLastComp extends Component<notesType> {
  render() {
    return(
        <div style={{color:'white'}}>
          2 - SubComponent subLast: {this.props.subLastname}
        </div>
    )
  }
}