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

        <section className="technical--section">
          <h2 className="technical--h2">Technical support</h2>
          <p className="technical--p">
            If you get troubles or if you have questions,
            send us an e-mail at 
            <a>technical@mail.cc</a>.
          </p>
        </section>
      </div>
    )
  }
}