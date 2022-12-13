import React from 'react'
import './styleComponents/DisplayInvitationOtherUsr.scss'

type Field = {
  value?: string
}

type Form = {
  invite: Field
}

interface DisplayInvitationOtherUsrProps {
  username: string
  form: object
  isCheckInvite: boolean
  handleSwitchBox: () => void
  handleInvitedResponse: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const DisplayInvitationOtherUsr: React.FC = (props: {
  DisplayInvitationOtherUsrProps, Form, Field }) => {
  return (
    <div className="invitation--display">
      <h4 className="invitation--h4">
        You've recieved invitation from {props.username}.
      </h4>
      <h4 className="invitation--h4">
        Are you ok for {props.form} chat ?
      </h4>
      <label>
        <input
          type="checkbox"
          checked={props.isCheckInvite}
          onChange={props.handleSwitchBox}
        />
        &nbsp;yes
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