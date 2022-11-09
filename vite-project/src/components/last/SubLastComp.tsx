import { Component } from 'react'
import { notesType } from '../../Models/notesType'

interface childrenProps {
  subLastname: string
  lastname: string | undefined
  children: React.ReactNode
}

export default class SubLastComp extends Component<notesType, childrenProps> {
  constructor(props:any) {
    super(props)
    this.state = {
      lastname: this.props.subLastname
    }
    this.handleReduceLast = this.handleReduceLast.bind(this);
  }

  handleReduceLast = () => {
    if (this.state.lastname.length >= 1) {
      const toSlice = this.state.lastname.slice(0, 1);
      this.setState({lastname: toSlice});
    }
    else {
      this.setState({lastname : "ok"});
    }
  }

  render() {
    return(
        <div style={{color:'white'}}>
          <p>2 - SubComponent subLast: {this.state.lastname}</p>
          <button
            onClick={this.handleReduceLast}
            style={{marginLeft: '10px'}}
          >
            Abbr lastname
          </button>

        </div>
    )
  }
}