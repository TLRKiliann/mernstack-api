import React from 'react'
import { UserType } from '../models/usertype'
import './styleComponents/AskMessageBox.scss'

type Field = {
  value?: string
}

type Form = {
  invite: Field
}

interface AskMessageBoxProps {
  catchById: UserType
  form: Form
  options: Field[]
  handleInviteChoice: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleInvitation: (e: React.MouseEvent<HTMLButtonElement>) => void
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const AskMessageBox: React.FC = (props: {AskMessageBoxProps, Form, Field}) => {
  //console.log(props.catchById, 'props.users')
  return (
    <div
      data-testid="testAskBox"
      className="boolean--result"
    >
      <form
        className="form--invitation"
      >
        <label htmlFor="users" className="lbl--invite">
          Invite
          <img
            src={props.catchById?.img}
            width="50px"
            height="50px"
            className="img--invite"
            alt="no img panel ask invite"
          />
          <span className="span--invite">
            {props.catchById?.firstName}&nbsp;
          </span> to private chat :
        </label>

        <label className="lbl--choicechat">
          Would you like&nbsp;
          <select 
            data-testid="selectid"
            id="invite"
            name="invite" 
            value={props.form}
            onChange={(e) => props.handleInviteChoice(e)}
            className="select--invite"
          >
          {props.options.map((option) => (
            <option
              data-testid="select-option"
              key={option.value}
              name="invite"
              value={option.value}
              className="option--invite"
            >
              {option.label}
            </option>
          ))}
          </select>
          &nbsp;chat.
        </label> 
        
        <button
          data-testid="btnInvite"
          type="button"
          onClick={(e) => props.handleInvitation(e)}
          className="btn--invitation"
        >
          Invite
        </button>

        <button
          data-testid="btnClose"
          onClick={props.handleClose}
          className="btn--close"
        >
          X
        </button>
      </form>
    </div>
  )
}

export default AskMessageBox