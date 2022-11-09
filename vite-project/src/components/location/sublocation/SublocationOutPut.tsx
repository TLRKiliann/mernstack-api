import { Component } from 'react'

interface DerivedProps {
  children: React.ReactNode
}

export default class SublocationOutPut extends Component<DerivedProps> {
  render() {
    return(
      <span>
          This is the children {this.props.children}
      </span>
    )
  }
}