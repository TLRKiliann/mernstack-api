import React from 'react'
import { UserType } from '../models/usertype'
import { ComputerType } from '../models/computerType'

interface ChooseMemberToAskProps {
  user: UserType
  computer: ComputerType
  handleAskUserPrivate: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void
  addUserById: (e: React.MouseMove<HTMLButtonElement>, id: number) => void
}

const ChooseMemberToAsk: React.FC = (props: ChooseMemberToAskProps) => {
  return (
    <span 
      data-testid="chooseMemberId"
      className="span--saloon">
      {props.user?.mainroom === props.computer?.title ? (
        <div className="user--imgsaloon">
          <img
            width="100%"
            height="100%"
            src={props.user?.img} 
            className="img--saloon"
          />
          <p className="useronline">
          {props.user?.firstName} {props.user?.isConnected ? (
            <span
              className="useronline--iconconnectected"
            >
              ✔
            </span>
            ):(
            <span
              className="useronline--icondeconnectected"
            >
              ❌
            </span>
            ) 
          }
          </p>
          <span
            onClick={() => props.handleAskUserPrivate(props.user?.id)}
            className="askprivate--service"
            title="Invite to private chat"
          >
            ✉
          </span>

          <span key={props.user?.id} className="lastspan--online">
            <button
              onClick={() => props.addUserById(props.user?.id)}
              className="btn--lastspanonline"
              title="Add as Your Friend"
            >
              +
            </button>
          </span>

        </div>
        ) : null
      }
    </span>
  )
}

export default ChooseMemberToAsk