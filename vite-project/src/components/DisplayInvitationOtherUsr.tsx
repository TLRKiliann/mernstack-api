import React from 'react'
import './styleComponents/DisplayInvitationOtherUsr.scss'

interface DisplayInvitationOtherUsrProps {
  isCheckInvite: boolean
  handleSwitchBox: () => void
  handleInvitedResponse: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const DisplayInvitationOtherUsr: React.FC = (props: DisplayInvitationOtherUsrProps) => {
  return (
    <div className="invitation--display">
      <h4 className="invitation--h4">You've recieved invitation from {props.username}.</h4>
      <h4 className="invitation--h4">Are you ok for {} chat ?</h4>
      <label>
        <input
          type="checkbox"
          checked={props.isCheckInvite}
          onChange={props.handleSwitchBox}
        />
        yes
      </label>
      <button
        type="button"
        onClick={props.handleInvitedResponse}
        className="btn--displayotheruser"
      >
        Validate
      </button>
    </div>
  )
}

export default DisplayInvitationOtherUsr