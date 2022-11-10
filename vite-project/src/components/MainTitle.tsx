import {Component} from 'react'

interface HeaderProps {
  textHeader: string
  secondTextHeader: string
}

export default class Header extends Component<HeaderProps> {

  myColor = {
    width: '600px',
    margin: 'auto',
    marginTop: '100px',
    height: 'auto',
    textAlign: 'center',
    fontFamily: "Consolas, serif",
    background: '#161616',
    border: '1px solid lightgreen',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px lightgreen',
    color: 'whitesmoke'
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