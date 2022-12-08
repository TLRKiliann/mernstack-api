import {Component} from 'react'
import bamImg from '../assets/logo/bam-bg.png'
import './styleComponents/MainTitle.scss'

interface HeaderProps {
  textHeader: string
  secondTextHeader: string
}

export default class Header extends Component<HeaderProps> {

  /*myColor = {
    width: '40%',
    height: 'auto',
    margin: 'auto',
    marginTop: '100px',
    textAlign: 'center',
    fontFamily: "Junction, serif",
    color: "whitesmoke",
    textShadow: "4px 3px 1px #383838",
    backgroundColor: "rgba(45, 85, 255, 0.4)",
    border: "1mm outset rgba(180, 85, 255, 0.2)",
    borderRadius: '15px'
  }*/
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