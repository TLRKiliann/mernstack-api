import React from 'react'
import './styleComponents/ConfirmInvitation.scss'

interface ConfirmInvitationProps {
  username: string
  isChecked: boolean
  handleCheckBox: () => void
  isNotConfirm: boolean
  handleCheckConfirmation: () => void
  handleBothConfirmation: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

const ConfirmInvitation: React.FC = (props: ConfirmInvitationProps) => {
  return (
    <div data-testid="confirmtestid" className="box--confirminvitation">
      
      <h4 className="confirm">
        <span className="span--confirmation">{props.username}&nbsp;</span>
        do you confirm invitation ?
      </h4>

      <div className="checkbox--div">
        <label>
          <input
            type="checkbox"
            checked={props.isChecked}
            onChange={props.handleCheckBox}
            className="input--validationInvite"
          />
          &nbsp;Yes
        </label>

        <label>
          <input
            type="checkbox"
            checked={props.isNotConfirm}
            onChange={props.handleCheckConfirmation}
            className="input--validationInvite"
          />
          &nbsp;No
        </label>
      </div>

      <button
<<<<<<< HEAD
        data-testid="btn-to-confirm"
=======
        data-testid="btnconfirminvitation"
>>>>>>> master
        type="button"
        onClick={props.handleBothConfirmation}
        className="btn--validationlast"
      >
        Validate
      </button>

    </div>
  )
}

export default ConfirmInvitation