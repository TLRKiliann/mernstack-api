import { Component } from 'react'
import notesType from './Model/notesType'
import SubLocalComp from './location/SubLocalComp'

export default class LocalNotes extends Component<notesType> {
  constructor(props) {
    super(props)
    this.state = {
      location: this.props.location
    }
  }
  render() {
    console.log(this.state.location)
    return(
      <div>
        Hello LocalNote ! {this.state.location}

        <SubLocalComp subLocation={this.state.location} />
      </div>
    )
  }
}