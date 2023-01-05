import {Component} from 'react'

import './styleComponents/MainTitle.scss'

interface HeaderProps {
  textHeader: string
  secondTextHeader: string
}

export default class Header extends Component<HeaderProps> {
  render() {
    return(
      <div className="maintitle">

        <h1 className="main--h1">Chat-Society</h1>
        <h2 className="main--h2">{this.props.textHeader}</h2>
        <h4 className="main--h4">{this.props.secondTextHeader}</h4>
      </div>
    )
  }
}