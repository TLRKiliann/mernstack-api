import React, { useState, useEffect } from 'react'
import { UserType } from '../models/usertype'
import { ComputerType } from '../models/computerType'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthLogin } from '../context/AuthProvider'
import serviceRouting from '../services/serviceRouting'
import useRetrieveDataHook from '../hook/retrieveData.hook'
import useComputerHook from '../hook/computers.hook'
import AskMessageBox from '../components/AskMessageBox'
import DisplayInviteOrigin from '../actions/DisplayInviteOrigin'
import ConfirmationOrigin from '../actions/ConfirmationOrigin'
import ChooseMemberToAsk from '../actions/ChooseMemberToAsk'
import '../stylePages/Online.scss'

type Field = {
  value?: sting
  label?: string
}

type Form = {
  invite: Field
}

const options: Field[] = [
  {
    label: "Private",
    value: "Private",
  },
  {
    label: "Info",
    value: "Info",
  },
  {
    label: "Question",
    value: "Question",
  }
]

const Online: React.FC = () => {
  const Navigate = useNavigate()
  const params = useParams<{ link?: string }>()
  const [roomStyle, setRoomStyle] = useState<{params?: string}>(params.link)
  const users = useRetrieveDataHook()
  const computers = useComputerHook()
  const { username, otherUser, setOtherUser, versusUser, setVersusUser, setTweekGroup} = useAuthLogin()
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

  const [group, setGroup] = useState<Array<UserType>>([])

  useEffect(() => {
    localStorage.setItem("Group", JSON.stringify(group))
  }, [group])

  const [informUsrMsg, setInformUsrMsg] = useState<Array<UserType>>([])
  const [displayConfirmInvite, setDisplayConfirmInvite] = useState<boolean>(false)

  const [form, setForm] = useState<Form>({
    invite: {value: 'Private'}
  })

  const [catchById, setCatchById] = useState<Array<UserType>>([])
  const [switchAsk, setSwitchAsk] = useState<boolean>(false)
  const [switchResponse, setSwitchResponse] = useState<boolean>(false)

  const addUserById = (id: number) => {
    const userTodAdd = users.find(user => user.id === id)
    const verifyAlreadyExist = group.find(g => g.id === id)
    if (username === userTodAdd.firstName) {
      alert("It's you...")
      setGroup(group.filter(g => g.id !== id))
    } else {
      console.log("Ok, new user accepted")
      setGroup([...group, userTodAdd])
      setTweekGroup([...group, userTodAdd])
      alert(`User ${userTodAdd.firstName} added to your group
        (look at your Profile !)`)
    }
  }

  const handleInviteChoice = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fieldName: string = e.target.name;
    const fieldValue: string | number  = e.target.value;
    const newField: Field = {[fieldName]: {value: fieldValue}}

    setForm({...form, ...newField});
  }

  const handleAskUserPrivate = (id: number) => {
    const catchUser = users?.find(user => user.id === id)
    setCatchById(catchUser)
    setSwitchAsk(!switchAsk)
  }

  const handleInvitation = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSwitchAsk(false)
    const data: UserType = catchById
    setOtherUser(data)
    const definedOptRoom: string = form.invite.value
    const id: number = data?.id
    const msg: string = `You've received msg from ${username} for ${definedOptRoom} chat !`
    const dataForVersusUser: object = {...data, room: definedOptRoom, signalRecieve: 1,
      sentMsg: username, messagebox: msg}
    
    const verifyName = data.firstName
    if (verifyName === username) {
      alert("Hey, wake-up ! It's YOU !!! :D")
    } else if (data.isConnected === false) {
      console.log(`${data.firstName} ${data.lastName} is not connected !`)
    } else {
      console.log("Validate handleInvitation")

      serviceRouting
        .putInvitation(id, dataForVersusUser)
        .then(initialData => {
          setInformUsrMsg(users?.map((user) => user.id === id ? 
            {
              id: id,
              img: user.img,
              firstName: user.firstName,
              lastName: user.lastName,
              age: user.age,
              email: user.email,
              location: user.location,
              gender: user.gender,
              mainroom: user.mainroom,
              room: definedOptRoom,
              isConnected: user.isConnected,
              signalRecieve: true,
              sentMsg: username,
              messagebox: msg,
              returnConfirm: user.returnConfirm
            } : user
          ))
        })
        .catch((error) => {
          setInformUsrMsg(users?.filter((u) => u.id !== id))
          console.log(verifyName, "do not received msg", error)
        })
      setDisplayConfirmInvite(true)
    }
    const pauseTimer = setTimeout(() => {
      console.log("Pause 1 request to update room.")
    }, 2000)
    const sendRoomToSender: UserType = users.find((user) => user.firstName === username)
    const newId: number = sendRoomToSender.id
    const senderUser: UserType[] = users.find((user) => user.id === newId)
    const changeRoomSender = {...senderUser, room: definedOptRoom}

    serviceRouting
      .putInvitationSender(newId, changeRoomSender)
      .then(initialData => {
        setInformUsrMsg(users?.map((usend) => usend.id === newId ? 
          {
            id: newId,
            img: usend.img,
            firstName: usend.firstName,
            lastName: usend.lastName,
            age: usend.age,
            email: usend.email,
            location: usend.location,
            gender: usend.gender,
            mainroom: usend.mainroom,
            room: definedOptRoom,
            isConnected: usend.isConnected,
            signalRecieve: usend.signalRecieve,
            sentMsg: usend.sentMsg,
            messagebox: usend.messagebox,
            returnConfirm: usend.returnConfirm
          } : usend
        ))
      })
      .catch((error) => {
        setInformUsrMsg(users?.filter((u) => u.id !== newId))
        console.log(username, "do not received msg", error)
      })
    console.log("invitation successfull sent to sender & invited !")
  }

  const handleClose = () => {
    setSwitchAsk(false)
  }

  const handleCloseResponse = () => {
    setSwitchResponse(false)
  }

  return(
    <div className="saloon--byusers">

      <div className="title--services">
        <h1>Rooms</h1>
      </div>

      <div className="divsection--saloon">

      {Object.values(computers)?.slice(0, 12).map(computer =>
        <section key={computer.id} className="section--saloon">
          <h3 className="titlebyroom">{computer.title}</h3>

          {Object.values(users)?.map(user =>
            <ChooseMemberToAsk
              key={user.id}
              user={user}
              computer={computer}
              handleAskUserPrivate={() => handleAskUserPrivate(user.id)}
              addUserById={() => addUserById(user.id)}
            />
          )}
        </section>
      )}
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

      {switchAsk &&
        <AskMessageBox
          catchById={catchById}
          form={form.invite.value}
          options={options}
          handleInviteChoice={(e) => handleInviteChoice(e)}
          handleInvitation={(e) => handleInvitation(e)}
          handleClose={handleClose}
        />
      }

    </div>
  )
}

export default Online