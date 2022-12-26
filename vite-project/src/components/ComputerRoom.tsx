import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import serviceRouting from '../services/serviceRouting';
import { useAuthLogin } from '../context/AuthProvider'
import { UserType } from '../models/usertype'
import usePersonnalHook from '../hook/personnal.hook'
import TerminalComponent from './terminalchat/TerminalComponent'
import UsersOnline from './terminalchat/UsersOnline'
import AskMessageBox from './AskMessageBox'
import DisplayInvitationOtherUsr from './DisplayInvitationOtherUsr'
import ConfirmInvitation from './ConfirmInvitation'
import worldData from '../assets/world_connected.png'
import './styleComponents/ComputerRoom.scss'

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
    label: "More Info",
    value: "More Info",
  },
  {
    label: "Question",
    value: "Question",
  }
]

const ComputerRoom: React.FC = () => {

  const users = usePersonnalHook()
  const { username, otherUser, setOtherUser, versusUser, setVersusUser } = useAuthLogin()
  const [refreshUser, setRefreshUser] = useState<{users?: UserType}>({})
  const [displayConfirmInvite, setDisplayConfirmInvite] = useState<boolean>(false)
  const [informUsrMsg, setInformUsrMsg] = useState<Array<UserType>>([])
  console.log(informUsrMsg, "informUsrMsg")

  useEffect(() => {
    const interval = setInterval(() => {
      serviceRouting
        .getAllMembers()
        .then(response => {
          setRefreshUser(response)
        })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const [catchById, setCatchById] = useState<Array<UserType>>([])  
  const [validMsg, setValidMsg] = useState<Array<UserType>>([]) 
  console.log(validMsg, "validMsg")

  const params = useParams<{ link?: string }>()
  const Navigate = useNavigate()
  const [roomStyle, setRoomStyle] = useState<{params?: string}>(params.link)
  const [form, setForm] = useState<Form>({invite: {value: 'Private'}})

  const [switchAsk, setSwitchAsk] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [isCheckInvite, setIsCheckInvite] = useState<boolean>(false)

  //Invite someone with chat mode options
  const handleInviteChoice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName: string = e.target.name;
    const fieldValue: string | number  = e.target.value;
    const newField: Field = {[fieldName]: {value: fieldValue}}

    setForm({...form, ...newField});
  }
  
  //Press mail icon to ask for invitation
  const handleAskUserPrivate = (id: number) => {
    console.log("handleAskUserPrivate 1")
    const catchUser = users?.find(user => user.id === id)
    setCatchById(catchUser)
    setSwitchAsk(true)
  }

  //Click btn to MsgBox to validate chat mode of invitation.
  const handleInvitation = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("handleInvitation 2")
    const data: UserType = catchById
    setOtherUser(data)
    setSwitchAsk(false)
    const definedRoom: string = form.invite.value
    const id: number = data?.id
    const msg: string = `You've received msg from ${username} for ${definedRoom} chat !`
    const dataForSigMsg = {...data, room: definedRoom, signalRecieve: 1,
      sentMsg: username, messagebox: msg}
    
    const verifyName = catchById.firstName
    if (verifyName === username) {
      alert("Hey, wake-up ! It's YOU !!! :D")
    } else if (catchById.isConnected === false) {
      alert(`${catchById.firstName} ${catchById.lastName} is not connected !`)
    } else {
      console.log("Validate handleInvitation")

      serviceRouting
        .putInvitation(id, dataForSigMsg)
        .then(initialData => {
          setInformUsrMsg(users?.map(cust => cust.id === id ? 
            {
              id: id,
              img: cust.img,
              firstName: cust.firstName,
              lastName: cust.lastName,
              age: cust.age,
              email: cust.email,
              location: cust.location,
              gender: cust.gender,
              mainroom: cust.mainroom,
              room: definedRoom,
              isConnected: cust.isConnected,
              signalRecieve: true,
              sentMsg: username,
              messagebox: msg,
              returnConfirm: cust.returnConfirm
            } : cust
          ))
        })
        .catch((error) => {
          setInformUsrMsg(users?.filter(cust => cust.id !== id))
          alert(`${verifyName} do not received msg`)
        })
      setDisplayConfirmInvite(true)
      console.log("handleInvitation finished !!!")
    }
  }

  const handleFilterUser = (changeUserNameReturnConfirm: object) => {
    console.log("handleFilterUser 5")
    const retrieveUserName: string = changeUserNameReturnConfirm.firstName
    if (retrieveUserName === username) {
      console.log("Validation confirmed ! 1")
      const timerIdTwo = setTimeout(() => {
        Navigate('/computerroom/privatemessage')
      }, 1000)
      setInformUsrMsg("")
      setCatchById("")
      setValidMsg("")
    } else {
      console.log("HandleFilterUser is not validated...")
    }
  }

  //Confirm your invitation after invited has said yes.
  const handleValidInvitation = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("handleValidInvitation 4")
    if (isChecked === true) {
      const user: UserType = users?.find(user => user.firstName === username)
      const id: number = user?.id;
      const newuser = users?.find(user => user.id === id)
      const noString: string = ""
      const changeUserNameReturnConfirm: object = {...newuser, firstName: username,
        sentMsg: noString, messagebox: noString, returnConfirm: 1}

      serviceRouting
        .updateUsrRetConf(id, changeUserNameReturnConfirm)
        .then(initialData => {
          setValidMsg(users?.map(user => user.id === id ? 
            {
              id: id,
              img: user.img,
              firstName: username,
              lastName: user.lastName,
              age: user.age,
              email: user.email,
              location: user.location,
              gender: user.gender,
              mainroom: user.mainroom,
              room: user.room,
              isConnected: user.isConnected,
              signalRecieve: user.signalRecieve,
              sentMsg: noString,
              messagebox: noString,
              returnConfirm: true
            } : user
          ))
        })
        .catch((error) => {
          setValidMsg(users?.filter(cust => cust.id !== id))
          alert("Problem to confirm msg handleValidInvitation...")
        })
      console.log("handleValidInvitation confirmed")
      handleFilterUser(changeUserNameReturnConfirm)
    } else {
      console.log("Confirmation not confirmed...")
    }
    setDisplayConfirmInvite(false)
  }

  //Invited receives your invitation
  const handleInvitedResponse = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("handleInvitedResponse 3")
    const findSentMsg: UserType = refreshUser?.find((u) => u?.sentMsg.length !== 0) //modif here
    console.log(findSentMsg, 'findSentMsg')

    const senderInvite: string = findSentMsg?.sentMsg
    console.log(senderInvite, 'senderInvite')

    const searchOtherUser = users?.find((u) => u?.firstName === senderInvite)
    setVersusUser(searchOtherUser)
    const user = users?.find(user => user?.firstName === username)
    const id: number | null = user?.id;
    const confirmInvitFromOther = users?.find(user => user.id === id)
    const changeReturnConf: object = {...confirmInvitFromOther, signalRecieve: 0,
      returnConfirm: 1}

    serviceRouting
      .updateResponseUser(id, changeReturnConf)
      .then(initialData => {
        setInformUsrMsg(users?.map(user => user?.id === id ? 
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
            room: user.room,
            isConnected: user.isConnected,
            signalRecieve: false,
            sentMsg: user.sentMsg,
            messagebox: user.messagebox,
            returnConfirm: true
          } : user
        ))
      })
      .catch((error) => {
        setInformUsrMsg(users?.filter(cust => cust.id !== id))
        alert(`${catchById.firstName} do not received msg`)
      })
    setRefreshUser("")
    setDisplayConfirmInvite(true)
    console.log("handleInvitedResponse - phase :3")
  }

  const handleClose = () => {
    setSwitchAsk(!switchAsk)
  }

  const handleCheckBox = () => {
    setIsChecked(!isChecked)
  }

  const handleSwitchBox = () => {
    setIsCheckInvite(!isCheckInvite)
  }

  return (
    <div className="nextcomp--room">

      <div className="div--animationroomStyle">
        <div className="rotation--roomstyle">
          <h1>{roomStyle}</h1>
        </div>
      </div>

      {displayConfirmInvite &&
        <ConfirmInvitation
          username={username}
          isChecked={isChecked}
          handleCheckBox={handleCheckBox}
          handleValidInvitation={handleValidInvitation}
        />
      }

      <div>
      {Object.values(refreshUser)?.map((refreshU): any => (
        (refreshU?.signalRecieve === 1 && refreshU?.firstName === username) ? (
        <DisplayInvitationOtherUsr
          key={refreshU?.id}
          id={refreshU?.id}
          username={refreshU?.firstName}
          initialSender={refreshU?.sentMsg}
          form={form.invite.value}
          isCheckInvite={isCheckInvite}
          handleSwitchBox={handleSwitchBox}
          handleInvitedResponse={(e) => handleInvitedResponse(e)}
        />
       ) : null 
      ))}
      </div>

      {switchAsk ? ( 
        <AskMessageBox
          key={catchById.id}
          catchById={catchById}
          form={form.invite.value}
          options={options}
          handleInviteChoice={handleInviteChoice}
          handleInvitation={(e) => handleInvitation(e)}
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

          {users?.map(user => (
            <UsersOnline
              key={user?.id}
              user={user}
              roomStyle={roomStyle}
              handleAskUserPrivate={() => handleAskUserPrivate(user?.id)}
            />
          ))}
        </section>
      </div>
    </div>
  )
}

export default ComputerRoom;

/*
    //const userSignalSearch: object = users?.find((u) => u.returnConfirm === 1)
    //const signalUserDefined: string = userSignalSearch.firstName
    /*if (signalUserDefined === username) {
      console.log("Validation confirmed ! 1")
      const timerIdTwo = setTimeout(() => {
        Navigate('/computerroom/privatemessage')
      }, 1000)
      setCatchById("")
      setInformUsrMsg("")
      setValidMsg("")
    } else if () {
      console.log("Validation confirmed ! 2")
      const timerIdTwo = setTimeout(() => {
        Navigate('/computerroom/privatemessage')
      }, 1000)
      setCatchById("")
      setInformUsrMsg("")
      setValidMsg("")
    } else {
      console.log("HandleFilterUser is not validated...")
    }
*/
