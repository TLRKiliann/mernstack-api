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

  const { username, otherUser, setOtherUser } = useAuthLogin()

  const [catchById, setCatchById] = useState<Array<UserType>>([])
  
  const [informUsrMsg, setInformUsrMsg] = useState<Array<UserType>>([])

  const users = usePersonnalHook()
  
  const [displayInvitation, setDisplayInvitation] = useState<boolean>(false)
  
  const params = useParams<{ link?: string }>()
  const Navigate = useNavigate()
  const [roomStyle, setRoomStyle] = useState<{params?: string}>(params.link)
  const [form, setForm] = useState<Form>({invite: {value: 'Private'}})

  console.log(catchById, "catchById")

  const [switchAsk, setSwitchAsk] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [isCheckInvite, setIsCheckInvite] = useState<boolean>(false)
  const [displayConfirmInvite, setDisplayConfirmInvite] = useState<boolean>(false)

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

    setOtherUser(catchById)
    setSwitchAsk(false)
    const definedRoom = form.invite.value
    const id: number = catchById.id
    //const catchFirstName: string = catchById.firstname
    const data: number = users?.find((u) => u.id === id)
    const msg: string = `You've received msg from ${username} for ${definedRoom} chat !`
    const dataForSigMsg = {...data, signalRecieve: true, sentMsg: username, messagebox: msg}
    
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
              room: cust.room,
              isConnected: cust.isConnected,
              signalRecieve: true,
              sentMsg: username,
              messagebox: msg,
              returnConfirm: cust.returnConfirm,
              password: cust.password
            } : cust
          ))
        })
        .catch((error) => {
          setInformUsrMsg(users?.filter(cust => cust.id !== id))
          alert(`${catchById.firstName} do not received msg`)
        })
      console.log("handleInvitation finished !!!")
    }
  }

  const handleTime = () => {
    const myUser = users?.find((user) => user.firstName === username)
    console.log(myUser, "myUser")

    const userSignal = users?.map((u) => u.signalRecieve === true)
    console.log(userSignal, "userSignal")

    if (userSignal.firstName === username) {
      console.log("returnConfirm is validate for both !!!")
      const timerIdTwo = setTimeout(() => {
        Navigate('/computerroom/privatemessage')
      }, 1000)
      setCatchById("")
      setInitialSender("")
      setInformUsrMsg("")
    } else if (myUser) {
      console.log("returnConfirm is validate for both !!!")
      const timerIdTwo = setTimeout(() => {
        Navigate('/computerroom/privatemessage')
      }, 1000)
      setCatchById("")
      setInitialSender("")
      setInformUsrMsg("")
    } else {
      console.log("HandleTime is not validated...")
    }
    setCatchById("")
  }

  //Confirm your invitation after invited has said yes.
  const handleValidInvitation = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("handleValidInvitation 4")

    if (isChecked === true) {
      const invitation: string = form.invite.value
      const user: string = users?.find(user => user.firstName === username)
      //const user = users?.find(user => user.signalRecieve === true)
      const id: number = user.id;
      const newuser: object = users?.find(user => user.id === id)
      const changeUserNameReturnConfirm = {...newuser, firstName: otherUser,
        room: invitation, signalRecieve: false, returnConfirm: true}
      //console.log(changeUserNameReturnConfirm, "changeUserNameReturnConfirm")

      serviceRouting
        .updateUsrRetConf(id, changeUserNameReturnConfirm)
        .then(initialData => {
          setInformUsrMsg(users?.find(user => user.id === id ? 
            {
              id: id,
              img: user.img,
              firstName: otherUser,
              lastName: user.lastName,
              age: user.age,
              email: user.email,
              location: user.location,
              gender: user.gender,
              mainroom: user.mainroom,
              room: invitation,
              isConnected: user.isConnected,
              signalRecieve: false,
              sentMsg: user.sentMsg,
              messagebox: user.messagebox,
              returnConfirm: true,
              password: user.password
            } : user
          ))
        })
        .catch((error) => {
          setInformUsrMsg(users?.filter(cust => cust.id !== id))
          alert("Problem to confirm msg handleValidInvitation...")
        })
      console.log("handleValidInvitation confirmed")
      handleTime()
    } else {
      console.log("Confirmation not confirmed...")
    }
    setDisplayConfirmInvite(false)
  }

  //Invited receives your invitation
  const handleInvitedResponse = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("handleInvitedResponse 3")

    setInformUsrMsg("")
    console.log("phase :")
    const user: UserType = users?.find(user => user.firstName === username)
    //const user = users?.find(user => user.signalRecieve === true)
    const id: number = user.id;
    const confirmInvitFromOther: number = users?.find(user => user.id === id)
    //console.log(confirmInvitFromOther, 'otherchatter')
    const changeReturnConf: object = {...confirmInvitFromOther, returnConfirm: true}
    //console.log(changeReturnConf, "changeReturnConf")
    console.log("phase :")
    serviceRouting
      .updateFinalConfirm(id, changeReturnConf)
      .then(initialData => {
        setInformUsrMsg(users?.map(user => user.id === id ? 
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
            signalRecieve: user.signalRecieve,
            sentMsg: user.sentMsg,
            messagebox: user.messagebox,
            returnConfirm: true,
            password: user.password
          } : user
        ))
      })
      .catch((error) => {
        setInformUsrMsg(users?.filter(cust => cust.id !== id))
        alert(`${catchById.firstName} do not received msg`)
      })
    console.log("phase :")
    setDisplayInvitation(false)
    setDisplayConfirmInvite(true)
    console.log("handleInvitedResponse", handleInvitedResponse)
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

  return(
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
      {displayInvitation && users?.map((u) => u.signalRecieve === 1 ? (
        <DisplayInvitationOtherUsr
          key={u.id}
          invited={u.firstName}
          initialSender={u.sentMsg}
          form={form.invite.value}
          isCheckInvite={isCheckInvite}
          handleSwitchBox={handleSwitchBox}
          handleInvitedResponse={handleInvitedResponse}
        />
       ) : null 
      )}
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

          {users.map(user => (
            <UsersOnline
              key={user.id}
              user={user}
              roomStyle={roomStyle}
              handleAskUserPrivate={() => handleAskUserPrivate(user.id)}
            />
          ))}
        </section>
      </div>
    </div>
  )
}

export default ComputerRoom;
