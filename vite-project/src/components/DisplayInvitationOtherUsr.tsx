import React from 'react'

interface DisplayInvitationOtherUsrProps {
  isCheckInvite: boolean
  handleSwitchBox: () => void
  handleInvitedResponse: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const DisplayInvitationOtherUsr: React.FC = (props: DisplayInvitationOtherUsrProps) => {
  return (
    <div>
      <h4 className="invitation--display">You've recieved invitation from {props.username}.</h4>
      <h4 className="invitation--display">Are you ok for {} chat ?</h4>
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
      >
        Validate
      </button>
    </div>
  )
}

export default DisplayInvitationOtherUsr