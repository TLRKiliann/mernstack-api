import {Component} from 'react'
import bamImg from '../assets/logo/bam-bg.png'
import './styleComponents/MainTitle.scss'

interface HeaderProps {
  textHeader: string
  secondTextHeader: string
}

export default class Header extends Component<HeaderProps> {
  render() {
    return(
      <div className="maintitle">
        <div className="div--bamimg">
          <img
            src={bamImg}
            width="100%"
            height="100%"
            className="bam--img"
            alt={bamImg}
          />
        </div>
        <h1 className="main--h1">Chat-Society</h1>
        <h2 className="main--h2">{this.props.textHeader}</h2>
        <h4 className="main--h4">{this.props.secondTextHeader}</h4>
      </div>
    )
  }
}