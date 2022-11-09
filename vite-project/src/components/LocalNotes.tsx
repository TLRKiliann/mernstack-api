import { Component } from 'react'
import {notesType} from '../Models/notesType'
import SubLocalComp from './location/SubLocalComp'
import DerivedLocalNotes from './location/DerivedLocalNotes'

interface childrenProps {
  location: string | undefined
  children: React.ReactNode
}

export default class LocalNotes extends Component<notesType, childrenProps> {
  constructor(props:any) {
    super(props)
    this.state = {
      location: this.props.location
    }
    this.handleReduce = this.handleReduce.bind(this);
  }

  handleReduce = () => {
    if (this.state.location.length >= 1) {
      const toSlice = this.state.location.slice(0, 1);
      this.setState({location: toSlice});
    }
    else {
      this.setState({location : "ok"});
    }
  }
  render() {
    console.log("localNotes:", this.state.location)
    return(
      <div style={{margin: '10px', border: '1px solid yellow'}}>
        <label>1 - Reusable BTN ! {this.props.location}</label>
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