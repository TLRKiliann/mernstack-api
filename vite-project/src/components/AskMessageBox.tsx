import React, { useState } from 'react'
import { db_users } from '../models/db_users'
import { UserType } from '../models/usertype'
import './styleComponents/AskMessageBox.scss'


interface db_usersProps {
  db_users: Array<UserType>
}

type Field = {
  value?: string
}

type Form = {
  invite: Field
}

interface AskMessageBoxProps {
  form: object
  catchById: db_usersProps
  handleInviteChoice: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleInvitation: (e: React.MouseEvent<HTMLButtonElement>) => void
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const AskMessageBox: React.FC = (props: {db_users, AskMessageBoxProps, Form, Field}) => {
    
  return(
    <div key={props.catchById?.id} className="boolean--result">
      <form
        onSubmit={(e) => props.handleInvitation(e)}
        data-testid="asktestid" 
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
            name="invite" 
            id="invite"
            value={props.form}
            onChange={(e) => props.handleInviteChoice(e)}
            className="select--invite"
          >
          {props.options.map((option) => (
            <option
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
          type='submit'
          className="btn--invitation"
        >
          Invite
        </button>

        <button
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