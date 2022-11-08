import { Component } from 'react'

interface DerivedProps {
  children: React.ReactNode
}

export default class DerivedLocalNotes extends Component<DerivedProps> {
  render() {
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}