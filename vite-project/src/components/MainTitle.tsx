import {Component} from 'react'

interface HeaderProps {
  textHeader: string
  secondTextHeader: string
}

export default class Header extends Component<HeaderProps> {

  myColor = {
    width: '40%',
    margin: 'auto',
    marginTop: '100px',
    height: 'auto',
    textAlign: 'center',
    fontFamily: "Consolas, serif",
    backgroundColor: 'rgba(45, 85, 255, 0.4)',
    border: '2mm ridge royalblue',
    borderRadius: '12px',
    color: 'lightblue',
    textShadow: '2px 1px 2px blue'
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