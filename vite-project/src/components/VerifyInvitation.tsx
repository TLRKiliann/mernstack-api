import React from 'react'

interface VerifyInvitationProps {
  isChecked: boolean
  handleCheckBox: () => void
  handleValidInvitation: (e: React.MouseEvent<HTMLButtonElement>) => void
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const VerifyInvitation: React.FC = (props: VerifyInvitationProps) => {
  console.log(props, "props")
  return (
    <div className="box--confirminvitation">
      <h4 className="confirm">Confirm invitation ?</h4>
      <label>
        <input
          type="checkbox"
          checked={props.isChecked}
          onChange={props.handleCheckBox}
          className="input--validationInvite"
        />
        yes
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

export default VerifyInvitation