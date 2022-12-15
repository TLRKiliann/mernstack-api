import React from 'react'
import './styleComponents/DisplayInvitationOtherUsr.scss'

type Field = {
  value?: string
}

type Form = {
  invite: Field
}

interface DisplayInvitationOtherUsrProps {
  invited: string
  initialSender: Array<any>
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
        
        <span className="span--h4">
          {props.invited}
        </span>! You've recieved invitation from

        {props.initialSender?.map((s) => (
          <span key={s.id} className="span--h4">
            {s.firstName}
          </span>
        ))}

      </h4>

      <p className="invitation--p">
        Are you ok for
        <span className="span--h4">
          {props.form}
        </span>chat ?
      </p>

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