import React from 'react'
import './styleComponents/AskMessageBox.scss'

interface AskMessageBoxProps {
  catchById: userType[]
  handleInvitation: (e: React.MouseEvent<HTMLButtonElement>) => void
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const AskMessageBox: React.FC = (props: AskMessageBoxProps) => {
  return(
    <div key={props.catchById.id} className="boolean--result">
      <div 
        className="form--invitation"
      >
        <label htmlFor="users" className="lbl--invite">
          Invite
          <img
            src={props.catchById.img}
            width="50px"
            height="50px"
            className="img--invite"
            alt="no img panel ask invite"
          />
          <span className="span--invite">
            {props.catchById.firstName}&nbsp;
          </span> to private chat :
        </label>
        <select name="users" id="users">
          <option
            className="option--invite"
            value="invite">Invitation</option>
          <option
            className="option--invite"
            value="message">Message</option>
        </select> 
        <button
          onClick={() => props.handleInvitation(props.catchById.id)}
          className="btn--invitation"
        >
          Invite
        </button>
        <button
          onClick={props.handleClose}
          className="btn--close"
        >
          X
        </button>
      </div>
    </div>
  )
}

export default AskMessageBox