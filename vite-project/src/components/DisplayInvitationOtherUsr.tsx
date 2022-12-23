import React from 'react'
import './styleComponents/DisplayInvitationOtherUsr.scss'

type Field = {
  value?: string
}

type Form = {
  invite: Field
}

interface DisplayInvitationOtherUsrProps {
  id: number | null
  username: string
  initialSender: string
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
          {props?.username} !
        </span>
        
        <p style={{marginTop: "30px"}}>
          You've recieved invitation from
        </p>

        <span className="span--h4">
          {props?.initialSender}.
        </span>

      </h4>

      <p className="invitation--p">
        Are you ok for
        <span className="span--h4">
          {props?.form}
        </span>chat ?
      </p>

      <label>
        <input
          type="checkbox"
          checked={props?.isCheckInvite}
          onChange={props?.handleSwitchBox}
        />
        &nbsp;yes
      </label>

      <button
        id={props?.id}
        type="button"
        onClick={(e) => props.handleInvitedResponse(e)}
        className="btn--displayotheruser"
      >
        Validate
      </button>
    </div>
  )
}

export default DisplayInvitationOtherUsr