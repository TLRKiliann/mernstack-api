import React from 'react'
import './styleComponents/DisplayInvitationOtherUsr.scss'

interface DisplayOtherUsrProps {
  id: number | null
  username: string
  initialSender: string
  roomName: string
  isCheckInvite: boolean
  isNotCheckInvite: boolean
  handleSwitchBox: () => void
  handleInvitedResponse: (e: React.MouseEvent<HTMLButtonElement>, room: string) => void
  handleReject: () => void
}

const DisplayInvitationOtherUsr: React.FC = (props: DisplayOtherUsrProps) => {

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
        <span className="span--invitationp">
          {props?.roomName}
        </span>chat ?
      </p>

      <div className="checkbox--firstconfirm">

        <label className="checkbox--firstconfirm--lbl">
          <input
            type="checkbox"
            checked={props.isCheckInvite}
            onChange={props.handleSwitchBox}
            style={{width: "15px", height: "15px"}}
          />
          &nbsp;Yes
        </label>

        <label className="checkbox--firstconfirm--lbl">
          <input
            type="checkbox"
            checked={props.isNotCheckInvite}
            onChange={props.handleRejectInvite}
            style={{width: "15px", height: "15px"}}
          />
          &nbsp;No
        </label>

      </div>

      <button
        id={props?.id}
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