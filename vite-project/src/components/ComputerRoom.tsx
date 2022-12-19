import React, { useState } from 'react'
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

  const params = useParams<{ link?: string }>()
  const Navigate = useNavigate()
  const { username, otherUser, setOtherUser } = useAuthLogin();

  const users = usePersonnalHook()

  const [initialSender, setInitialSender] = useState<Array<string>>([])
  const [roomStyle, setRoomStyle] = useState<{params?: string}>(params.link)
  const [catchById, setCatchById] = useState<Array<UserType>>([])
  console.log(catchById, "catchById")

  const [informUsrMsg, setInformUsrMsg] = useState<Array<UserType>>([])

  const [form, setForm] = useState<Form>({
    invite: {value: 'Private'}
  })

  const [switchAsk, setSwitchAsk] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [isCheckInvite, setIsCheckInvite] = useState<boolean>(false)
  const [displayInvitation, setDisplayInvitation] = useState<boolean>(false)
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
    const catchUser = users?.find(user => user.id === id)
    setCatchById(catchUser)
    setSwitchAsk(true)
  }

  //Click btn to MsgBox to validate chat mode of invitation. 
  const handleInvitation = (order_id: number, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(order_id, "id of handleInvitation")
    setOtherUser(catchById)
    setSwitchAsk(false)

    const sender = users?.find((user) => user.firstName === username)
    setInitialSender(sender)
    
    const definedRoom = form.invite.value;
    
    const id = catchById.order_id
    console.log(id, 'id')
    const data = users?.find((u) => u.order_id === id)
    console.log(data, 'data')

    const msg = `You've received msg from ${username} for ${definedRoom} chat !`
    const dataForSigMsg = {...data, signalRecieve: true, messagebox: msg}
    console.log(dataForSigMsg)
    
    const verifyName = catchById.firstName
    if (verifyName === username) {
      alert("Hey, wake-up ! It's YOU !!! :D")
    } else if (catchById.isConnected === false) {
      alert(`${catchById.firstName} ${catchById.lastName} is not connected !`)
    } else {    
      const timerId = setTimeout(() => {
        console.log("setTimeout 1")
        setDisplayInvitation(true)
      }, 1000)

      serviceRouting
        .putInvitation(id, dataForSigMsg)
        .then(initialData => {
          setInformUsrMsg(users?.find(cust => cust.id === id ? 
            {
              order_id: id,
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
              sentMsg: cust.sentMsg,
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
    console.log("handle time ok")
    console.log(informUsrMsg, "**informUsrMsg**")
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
    if (isChecked === true) {
      const invitation = form.invite.value
      const user = users?.find(user => user.firstName === username)
      const id = user.order_id;
      const newuser = users?.find(user => user.order_id === id)
      const changeUserNameReturnConfirm = {...newuser, firstName: username, room: invitation, returnConfirm: true}
      console.log(changeUserNameReturnConfirm, "changeUserNameReturnConfirm")

      serviceRouting
        .updateUsrRetConf(id, changeUserNameReturnConfirm)
        .then(initialData => {
          setInformUsrMsg(users?.find(user => user.order_id === id ? 
            {
              order_id: id,
              img: user.img,
              firstName: username,
              lastName: user.lastName,
              age: user.age,
              email: user.email,
              location: user.location,
              gender: user.gender,
              mainroom: user.mainroom,
              room: invitation,
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
          setInformUsrMsg(users?.filter(cust => cust.order_id !== id))
          alert(`Problem to confirm msg...`)
        })
      console.log("handleValidInvitation confirmed")
      handleTime()
    } else {
      console.log("Confirmation not confirmed...")
    }
    setDisplayConfirmInvite(false)
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

  //Invited receives your invitation
  const handleInvitedResponse = (e: React.MouseEvent<HTMLButtonElement>) => {
    setDisplayInvitation(false)
    const id = catchById.order_id
    const otherChater = users?.find(user => user.order_id === id)
    //console.log(otherChater, 'otherchatter')
    const changeReturnConf = {...otherChater, returnConfirm: true}
    //console.log(changeReturnConf, "changeReturnConf")
    serviceRouting
      .updateFinalConfirm(id, changeReturnConf)
      .then(initialData => {
        setInformUsrMsg(users?.find(user => user.order_id === id ? 
          {
            order_id: id,
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
    setDisplayConfirmInvite(true)
    console.log("handleInvitedResponse", handleInvitedResponse)
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

      {displayInvitation ? (
        <div>
          <DisplayInvitationOtherUsr
            key={catchById.id}
            invited={catchById.firstName}
            initialSender={initialSender.firstName}
            form={form.invite.value}
            isCheckInvite={isCheckInvite}
            handleSwitchBox={handleSwitchBox}
            handleInvitedResponse={handleInvitedResponse}
          />
        </div>
      ) : null }

      {switchAsk &&
        <AskMessageBox
          catchById={catchById}
          form={form.invite.value}
          options={options}
          handleInviteChoice={handleInviteChoice}
          handleInvitation={(e) => handleInvitation(e, order_id)}
          handleClose={handleClose}
        />
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
        
        <UsersOnline
          roomStyle={roomStyle}
          handleAskUserPrivate={handleAskUserPrivate}
        />

      </div>
    </div>
  )
}

export default ComputerRoom;
