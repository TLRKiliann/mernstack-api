import React, { useState } from 'react'

interface ResponsePrivateMsgProps {
  handleCloseResponse: () => void
}

const ResponsePrivateMsg: React.FC = (props: ResponsePrivateMsgProps) => {

  return(
    <div className="response--private">
      <section className="section--response">
        <h2 className="title--response">State of Invitation</h2>
        <p className="p--response">Message sent !</p>
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