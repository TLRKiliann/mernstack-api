import React from 'react'
import './styleComponents/ConfirmInvitation.scss'

interface ConfirmInvitationProps {
  username: string
  isChecked: boolean
  handleCheckBox: () => void
  handleValidInvitation: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ConfirmInvitation: React.FC = (props: ConfirmInvitationProps) => {
  return (
    <div className="box--confirminvitation">
      <h4 className="confirm">
        <span className="span--confirmation">{props.username}</span>
        do you confirm invitation ?
      </h4>
      <label>
        <input
          type="checkbox"
          checked={props.isChecked}
          onChange={props.handleCheckBox}
          className="input--validationInvite"
        />
        &nbsp;yes
      </label>

      <button
        type="button"
        onClick={props.handleValidInvitation}
        className="btn--validationlast"
      >
        Validate
      </button>
    </div>
  )
}

export default ConfirmInvitation