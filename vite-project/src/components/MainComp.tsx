import { Component } from 'react'
import { notesType } from '../notes/notestype';
import './MainComp.scss'

interface MainCompProps {
  notes: notesType[]
}

export default class MainComp extends Component<MainCompProps> {
  render() {
    return(
      <div className="master--maincomp">

        <div className="submaster--maincomp">
            
          <div className="bg--colormaincomp">

            <h2 className='h2--maincomp'>
              Member Connected !
            </h2>

            <div>

            {this.props.notes.map(note => (
              <div key={note.id}>
              {note.isConnected ? (
                <div className="div--connection">
                  {note.firstName} {note.lastName} :&nbsp;
                    <div style={{color: 'green'}}>
                      "Connected"
                    </div>
                </div>
                ) : null
              }
              </div>
              ))
            }
            </div>
          </div>

        </div>
      </div>
    )
  }
}