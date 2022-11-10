import { Component } from 'react'
import './VoletLeft.scss'


interface VoletLeftProps {
  isLefted: boolean
  handleVoletsRight: () => void
}

export default class VoletLeft extends Component<VoletLeftProps> {
  render() {
    return(
      <div>
        {this.props.isLefted ? (
          <div className="volet--L">
            <div className="subvolet--L">
              <button onClick={this.props.handleVoletsLeft}>X</button>
              <p>Volet L 1</p>
            </div>
          </div>
          ) : (
          <div className="volet--L2">
            <div className="subvolet--L2">
              <button onClick={this.props.handleVoletsLeft}>X</button>
              <p>Volet L 2</p>
            </div>
          </div>
          )
        }
      </div>
    )
  }
}
