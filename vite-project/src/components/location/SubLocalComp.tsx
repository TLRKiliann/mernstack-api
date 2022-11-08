import { Component } from 'react'
import notesType from './Model/notesType'

export default class SubLocalComp extends Component<notesType> {
  constructor(props) {
    super(props)
  }

  

  render() {
    console.log(this.props.subLocation)
    return(
      <div style={{color:'white'}}>
        SubComponent subLocation: {this.props.subLocation}
      </div>
    )
  }
}