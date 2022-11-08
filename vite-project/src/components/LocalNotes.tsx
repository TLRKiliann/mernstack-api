import { Component } from 'react'
import notesType from './Model/notesType'
import SubLocalComp from './location/SubLocalComp'
import DerivedLocalNotes from './DerivedLocalNotes'

interface childrenProps {
  children: string
}

export default class LocalNotes extends Component<childrenProps, notesType> {
  constructor(props) {
    super(props)
    this.state = {
      location: this.props.location
    }
    this.handleReduce = this.handleReduce.bind(this);
  }

  handleReduce = () => {
    const toSlice = this.state.location.slice(0, 1);
    this.setState({location: toSlice});
  }
  render() {
    //console.log("localNotes:", this.state.location)
    //Interesting state - props
    return(
      <div>
        <label>1 - Hello LocalNote ! {this.props.location}</label>
        <button
          onClick={this.handleReduce}
          style={{marginLeft: '10px'}}
        >
          Abbr location
        </button>

        <SubLocalComp subLocation={this.state.location}/>

        <DerivedLocalNotes>
          {this.props.children}
        </DerivedLocalNotes>
      </div>
    )
  }
}