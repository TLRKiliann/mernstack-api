import { Component } from 'react'
import planet from '../assets/planet-connection.jpg'
import '../stylePages/Help.scss'

export default class Help extends Component {
  render() {
    return(
      <div>
        <div className="class--planet">
          <img
            src={planet}
            width="100%"
            height="100%"
            className="img--planetcontact"
            alt={planet}
          />
        </div>
        <div data-testid="divtestone" className="title--contact">
          <h1>Help</h1>
        </div>
      </div>
    )
  }
}