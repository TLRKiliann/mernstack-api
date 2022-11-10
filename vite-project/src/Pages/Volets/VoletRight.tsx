import { Component } from 'react'
import './VoletRight.scss'


interface VoletRightProps {
  isClosed: boolean
  handleVoletsRight: () => void
}

export default class VoletRight extends Component<VoletRightProps> {
  render() {
    return(
      <div>
        {this.props.isClosed ? (
          <div className="volet--R">
            <div className="subvolet--R">
              <button onClick={this.props.handleVoletsRight}>X</button>
              <p>Volet R 1</p>
            </div>
          </div>
          ) : (
          <div className="volet--R2">
            <div className="subvolet--R2">
              <button onClick={this.props.handleVoletsRight}>X</button>
              <p>Volet R 2</p>
            </div>
          </div>
          )
        }
      </div>
    )
  }
}
