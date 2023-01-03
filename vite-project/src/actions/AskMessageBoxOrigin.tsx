import { useState }  from 'react'
import { UserType } from '../models/usertype'
import serviceRouting from '../services/serviceRouting'
import AskMessageBox from '../components/AskMessageBox'

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

interface AskProps {
  username: string
  catchById: UserType
  setOtherUser: UserType
  users: UserType[]
  setInformUsrMsg: UserType[]
  setSwitchAsk: boolean
  setDisplayConfirmInvite: boolean
  handleClose: () => void
}

const AskMessageBoxOrigin: React.FC = (props: AskProps) => {

  const [form, setForm] = useState<Form>({invite: {value: 'Private'}})

  const handleInviteChoice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName: string = e.target.name;
    const fieldValue: string | number  = e.target.value;
    const newField: Field = {[fieldName]: {value: fieldValue}}
    setForm({...form, ...newField});
  }

  const handleInvitation = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("handleInvitation 2")
    props.setSwitchAsk(false)
    const data: UserType = props.catchById
    console.log(data, 'data 1')
    props.setOtherUser(data)
    const definedOptRoom: string = form.invite.value
    const id: number = data?.id
    const msg: string = `You've received msg from ${props.username} for ${definedOptRoom} chat !`
    const dataForVersusUser: object = {...data, room: definedOptRoom, signalRecieve: 1,
      sentMsg: props.username, messagebox: msg}
    console.log(dataForVersusUser, 'ronaldo - jeanne ? 1')
    
    const verifyName = data.firstName
    if (verifyName === props.username) {
      alert("Hey, wake-up ! It's YOU !!! :D")
    } else if (data.isConnected === false) {
      console.log(`${data.firstName} ${data.lastName} is not connected !`)
    } else {
      console.log("Validate handleInvitation")

      serviceRouting
        .putInvitation(id, dataForVersusUser)
        .then(initialData => {
          props.setInformUsrMsg(props.users?.map((user) => user.id === id ? 
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
              sentMsg: props.username,
              messagebox: msg,
              returnConfirm: user.returnConfirm
            } : user
          ))
        })
        .catch((error) => {
          props.setInformUsrMsg(props.users?.filter((u) => u.id !== id))
          console.log(verifyName, "do not received msg", error)
        })
      props.setDisplayConfirmInvite(true)
      console.log("handleInvitation finished !!!")
    }
    const pauseTimer = setTimeout(() => {
      console.log("Pause 1 request to update room.")
    }, 2000)
    const sendRoomToSender: UserType = props.users.find((user) => user.firstName === props.username)
    const newId: number = sendRoomToSender.id
    const senderUser: UserType[] = props.users.find((user) => user.id === newId)
    console.log(senderUser, 'senderUser 2')
    const changeRoomSender = {...senderUser, room: definedOptRoom}
    console.log(changeRoomSender, 'ronaldo - jeanne ? 2')

    serviceRouting
      .putInvitationSender(newId, changeRoomSender)
      .then(initialData => {
        props.setInformUsrMsg(props.users?.map((usend) => usend.id === newId ? 
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
        props.setInformUsrMsg(props.users?.filter((u) => u.id !== newId))
        console.log(props.username, "do not received msg", error)
      })
    console.log("invitation successfull sent to sender & invited !")
  }

  return (
    <AskMessageBox
      key={props.catchById.id}
      catchById={props.catchById}
      form={form.invite.value}
      options={options}
      handleInviteChoice={handleInviteChoice}
      handleInvitation={(e) => handleInvitation(e)}
      handleClose={props.handleClose}
    />
  )
}

export default AskMessageBoxOrigin