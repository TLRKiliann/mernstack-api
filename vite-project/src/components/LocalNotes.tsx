import { Component } from 'react'
import notesType from './Model/notesType'
import SubLocalComp from './location/SubLocalComp'

export default class LocalNotes extends Component<notesType> {
  constructor(props) {
    super(props)
    this.state = {
      location: this.props.location
    }
    this.handleReduce = this.handleReduce.bind(this);
  }

  handleReduce = () => {
    const toSlice = this.state.location.slice(0, 1);
    //console.log("slice:", toSlice);
    this.setState({location: toSlice});
    //console.log("slice_2 :", this.state.location)
  }

  render() {
    //console.log("localNotes:", this.state.location)
    //Interesting state - props
    return(
      <div>
        <label>1 - Hello LocalNote ! {this.state.location}</label>
        <button
          onClick={this.handleReduce}
          style={{marginLeft: '10px'}}
        >
          Abbr location
        </button>
        <SubLocalComp subLocation={this.state.location} />
      </div>
    )
  }
}