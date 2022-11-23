import { Component } from 'react'
import cool from '../assets/coolnection.jpg'
import '../stylePages/Services.scss'

export default class Services extends Component {
  render() {
    return(
      <div>
        <div className="div--imgservices">
          <img
            src={cool}
            width="100%"
            height="100%"
            className="img--services"
            alt={cool}
          />
        </div>

        <div className="title--services">
          <h1>Services</h1>
        </div>

        <section>
          <p>
            |
            |
            |
          </p>
        </section>
      </div>
    )
  }
}