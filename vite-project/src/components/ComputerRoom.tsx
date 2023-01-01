import React, { useState, useEffect } from 'react'
import serviceRouting from '../services/serviceRouting'
import { useParams } from 'react-router-dom'
import { useAuthLogin } from '../context/AuthProvider'
import { UserType } from '../models/usertype'
import usePersonnalHook from '../hook/personnal.hook'
import HandleAskUserOrigin from '../feature/HandleAskUserOrigin'
import AskMessageBoxOrigin from '../feature/AskMessageBoxOrigin'
import DisplayInviteOrigin from '../feature/DisplayInviteOrigin'
import ConfirmationOrigin from '../feature/ConfirmationOrigin'
import TerminalComponent from './terminalchat/TerminalComponent'
import UsersOnline from './terminalchat/UsersOnline'
import worldData from '../assets/background/world_connected.png'
import './styleComponents/ComputerRoom.scss'

const ComputerRoom: React.FC = () => {

  const params = useParams<{ link?: string }>()
  const [roomStyle, setRoomStyle] = useState<{params?: string}>(params.link)
  const users = usePersonnalHook()
  const { username, otherUser, setOtherUser, versusUser, setVersusUser } = useAuthLogin()
  const [refreshUsers, setRefreshUsers] = useState<Array<UserType>>([])

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Updated ! (1)")
      serviceRouting
        .getAllMembers()
        .then((response) => {
          setRefreshUsers(response)
        })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const [informUsrMsg, setInformUsrMsg] = useState<Array<UserType>>([])

  const [displayConfirmInvite, setDisplayConfirmInvite] = useState<boolean>(false)
  
  const [catchById, setCatchById] = useState<Array<UserType>>([])
  const [switchAsk, setSwitchAsk] = useState<boolean>(false)

  const handleClose = () => {
    setSwitchAsk(!switchAsk)
  }

  return (
    <div className="nextcomp--room">

      <div className="div--animationroomStyle">
        <div className="rotation--roomstyle">
          <h1>{roomStyle}</h1>
        </div>
      </div>

      {displayConfirmInvite &&
        refreshUsers?.map((refUser) => refUser.firstName === username ? (
          <ConfirmationOrigin
            key={refUser.id}
            id={refUser.id}
            username={username}
            roomStyle={roomStyle}
            setRoomStyle={setRoomStyle}
            setRefreshUsers={setRefreshUsers}
            refreshUsers={refreshUsers}
            setDisplayConfirmInvite={setDisplayConfirmInvite}
            setInformUsrMsg={setInformUsrMsg}
            setCatchById={setCatchById}
          />
        ) : null
      )}

      <div>
        {refreshUsers?.map((refreshU) => (
          ((refreshU?.signalRecieve === 1) && (refreshU?.firstName === username)) ? (
            <DisplayInviteOrigin
              key={refreshU?.id}
              id={refreshU?.id}
              username={refreshU?.firstName}
              initialSender={refreshU?.sentMsg}
              roomName={refreshU?.room}
              roomStyle={roomStyle}
              setVersusUser={setVersusUser}
              users={users}
              refreshUsers={refreshUsers}
              setRefreshUsers={setRefreshUsers}
              setDisplayConfirmInvite={setDisplayConfirmInvite}
            />
          ) : null 
        ))}
      </div>

      {switchAsk ? ( 
        <AskMessageBoxOrigin
          key={catchById.id}
          username={username}
          users={users}
          catchById={catchById}
          setOtherUser={setOtherUser}
          setInformUsrMsg={setInformUsrMsg}
          setDisplayConfirmInvite={setDisplayConfirmInvite}
          setSwitchAsk={setSwitchAsk}
          handleClose={handleClose}
        />
        ) : null
      }

      <h1 className="title--room">Room {Object.values(params)}</h1>
      
      <div data-testid="testdiv" className="div--terminaluser">
        <div className="section--terminal">
          <div className="div--worldbg">
            <img
              src={worldData}
              width="100%"
              height="100%"
              className="img--bgterminal"
              alt={worldData}
            />
          </div>

          <TerminalComponent roomStyle={roomStyle} />
        </div>

        <section className="user--online">
          <div className="div--userolinetitle">
            <h3 className="userolinetitle">Online Users</h3>
          </div>
            {refreshUsers?.map((refreshUser) => (
              <HandleAskUserOrigin
                key={refreshUser?.id}
                id={refreshUser?.id}
                refreshUser={refreshUser}
                roomStyle={roomStyle}
                users={users}
                setCatchById={setCatchById}
                setSwitchAsk={setSwitchAsk}
              />
            ))}
        </section>
      </div>
      
    </div>
  )
}

export default ComputerRoom;
