import React, { useState } from 'react'


interface db_usersProps {
  db_users: Array<UserType>
}

type Field = {
  value?: string
}

type Form = {
  invite: Field
}

interface ResponsePrivateMsgProps {
  form: object
  catchById: db_usersProps
  handleCloseResponse: () => void
}

const ResponsePrivateMsg: React.FC = (props: {
  ResponsePrivateMsgProps,
  db_usersProps,
  Form,
  Field}) => {

  return(
    <div className="response--private">
      <section className="section--response">
        <h2 className="title--response">
          State of <span style={{color: 'orange'}}>{props.form}</span>
        </h2>
        <p className="p--response">Message sent to&nbsp;
          <span className="span--response">{props.catchById.firstName}!</span>
        </p>
        <button
          onClick={props.handleCloseResponse}
          className="btn--response"
        >
          Close
        </button>
      </section>
    </div>
  )
}

export default ResponsePrivateMsg