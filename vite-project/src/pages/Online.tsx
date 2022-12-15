import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthLogin } from '../context/AuthProvider'
import usePersonnalHook from '../hook/personnal.hook'
import useComputerHook from '../hook/computers.hook'
import AskMessageBox from '../components/AskMessageBox'
import ResponsePrivateMsg from '../components/ResponsePrivateMsg'
import '../stylePages/Online.scss'

import { computerType } from '../models/computerType'
import { UserType } from '../models/usertype'

type DataAllType = {
  users: UserType[]
  computers: computerType[]
}

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

const Online: React.FC = () => {

  const Navigate = useNavigate()

  const [form, setForm] = useState<Form>({
    invite: {value: 'Private'}
  })

  const [group, setGroup] = useState<Array<string | number | boolean>>([])
  const [catchById, setCatchById] = useState<Array<UserType>>([])
  const [switchAsk, setSwitchAsk] = useState<boolean>(false)
  const [switchResponse, setSwitchResponse] = useState<boolean>(false)

  const {username, setOtherUser, setTweekGroup } = useAuthLogin();

  //hooks
  /*
  const users = usePersonnalHook<{users: UserType}>({})
  const computers = useComputerHook<{computers: computerType}>()
  */
  const users = usePersonnalHook()
  const computers = useComputerHook()

  useEffect(() => {
    localStorage.setItem("Group", JSON.stringify(group))
  }, [group])

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

  const handleInvitation = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    //console.log(catchById, "catchUser")
    setOtherUser(catchById)
    setSwitchAsk(!switchAsk)
    setSwitchResponse(!switchResponse)
    //Navigate('/computerroom/privatemessage')
    
    /*const sendMessage = users?.find(user => user === catchById)
    console.log(sendMessage, "sendMessage")*/

    /*serviceRouting
      .getAllMembers(sendMessage, id)
      .then(initialData => {
        setUsers(initialData)
      })
      .catch((error) => {
        console.log("error", error)
      })
    */
  }

  const handleClose = () => {
    setSwitchAsk(false)
  }

  const handleCloseResponse = () => {
    setSwitchResponse(false)
  }

  const handleCloseConfirm = () => {
    setConfirmRequest(false)
  }

  return(
    <div className="saloon--byusers">

      <div className="title--services">
        <h1>Rooms</h1>
      </div>

      <div className="divsection--saloon">

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

      {switchResponse && 
        <ResponsePrivateMsg
          form={form.invite.value}
          catchById={catchById}
          handleCloseResponse={handleCloseResponse}
        />
      }

      {Object.values(computers)?.slice(0, 12).map(computer =>
        <section key={computer.id} className="section--saloon">
          <h3 className="titlebyroom">{computer.title}</h3>

          {Object.values(users)?.map(user =>
            <span key={user.id} className="span--saloon">
              {user.mainroom === computer.title ? (
                <div className="user--imgsaloon">
                  <img
                    width="100%"
                    height="100%"
                    src={user.img} 
                    className="img--saloon"
                  />
                  <p className="font--online">
                  {user.firstName} {user.isConnected ? (
                    <span
                      style={{
                        color: 'lightgreen',
                        marginLeft: "5px"
                      }}
                    >
                      ✔
                    </span>
                    ):(
                    <span
                      style={{
                        color: 'red',
                        marginLeft: "5px",
                        fontSize: "18px"
                      }}
                    >
                      ❌
                    </span>
                    ) 
                  }
                  </p>
                  <span
                    onClick={() => handleAskUserPrivate(user.id)}
                    className="askprivate--service"
                    title="Invite to private chat"
                  >
                    ✉
                  </span>

                  <span key={user.id} className="lastspan--online">
                    <button
                      onClick={() => addUserById(user.id)}
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
            )}
        </section>
      )}
      </div>
    </div>
  )
}

export default Online