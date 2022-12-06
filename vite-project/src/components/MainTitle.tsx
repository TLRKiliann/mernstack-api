import {Component} from 'react'

interface HeaderProps {
  textHeader: string
  secondTextHeader: string
}

export default class Header extends Component<HeaderProps> {

  myColor = {
    width: '40%',
    height: 'auto',
    margin: 'auto',
    marginTop: '100px',
    textAlign: 'center',
    fontFamily: "Junction, serif",
    color: "whitesmoke",
    textShadow: "4px 3px 1px #383838",
    backgroundColor: "rgba(45, 85, 255, 0.4)",
    border: "1mm outset rgba(150, 120, 255, 0.4)",
    borderRadius: '15px'
  }
  render() {
    return(
      <div style={this.myColor}>
        <h1>Chat-Room STACK</h1>
        <h2>{this.props.textHeader}</h2>
        <h4>{this.props.secondTextHeader}</h4>
      </div>
    )
  }
}