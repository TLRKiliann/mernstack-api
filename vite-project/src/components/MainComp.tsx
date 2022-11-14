import React from 'react'
import { notesType } from '../notes/notestype';
import './styleComponents/MainComp.scss'

interface MainCompProps {
  notes: notesType[]
}

const MainComp: React.FC = (props: MainCompProps) => {

  return(
    <div className="master--maincomp">

      <div className="submaster--maincomp">
          
        <div className="bg--colormaincomp">

          <h2 className='h2--maincomp'>
            Member Connected !
          </h2>

          <div>

          {props.notes.slice(0, 10).map(note => (
            <div key={note.id}>
            {note.isConnected ? (
              <div className="div--connection">
                {note.firstName} {note.lastName} :&nbsp;
                  <div 
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      color: 'lightgreen'
                    }}>
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

export default MainComp