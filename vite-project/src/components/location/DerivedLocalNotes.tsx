import { Component } from 'react'
import SublocationOutPut from './sublocation/SublocationOutPut'

interface DerivedProps {
  children: React.ReactNode
}

export default class DerivedLocalNotes extends Component<DerivedProps> {
  render() {
    console.log(this.props.children)
    return(
      <span style={{width: '300px', margin: 'auto', display: 'flex', flexDirection: 'column'}}>
        <SublocationOutPut children={this.props.children} />
      </span>
    )
  }
}
//This is the children {this.props.children}
//<SublocationOutPut children={this.props.children} />