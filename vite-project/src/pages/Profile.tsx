import React from 'react'
import { useAuthLogin } from '../context/AuthProvider'
import usePersonnalHook from '../hook/personnal.hook'
import { UserType } from '../models/usertype'
import bgProfile from '../assets/background/circle.jpg'
import '../stylePages/Profile.scss'

const Profile: React.FC = () => {

  const { username, tweekGroup, setTweekGroup } = useAuthLogin()
  const users = usePersonnalHook()
  console.log(users, 'users')

  const handleRefresh = () => {
    console.log("Refresh !")
    const refreshGroup = JSON.parse(localStorage.getItem("Group"))
    setTweekGroup(refreshGroup)
  }

  const handleDelete = (id: number): void => {
    setTweekGroup(tweekGroup.filter(t => t.id !== id))
    alert(`Member deleted from your group`)
  }

  return (
    <div className="profile">
      <div className="div--mainimgprofile">
        <img
          src={bgProfile}
          width="40px"
          height="40px"
          className="img--bgprofile"
          alt={bgProfile}
        />
      </div>

      <div className="maintitlepro">
        <h1 className="maintitlepro--h1title">
          Profile of
        </h1>
        <h1 className="maintitlepro--h1name">{username}</h1>
      </div>

      {users?.map((user) => user.firstName === username ? (
        <div key={user.id} className="yourprofile">
          <div className="yourprofile--divimg">
            <img 
              src={user.img} 
              width="100%"
              height="100%"
              className="yourprofile--img"
              alt="img yourprofile"/>
          </div>
          <section className="yourprofile--section">
            <h2 className="yourprofile--h2">
              {user.firstName} {user.lastName}
            </h2>
            <p className="yourprofile--p">{user.age} years</p>
            <p className="yourprofile--p">Email: {user.email}</p>
            <p className="yourprofile--p">Location: {user.location}</p>
          </section>
        </div>
        ) : null
      )}

      <div className="tweekGroup--friends">
        <div className="div--profileh4">
          <h4 className="titleh4--profile">Your Group :</h4>
          <button 
            type="button" 
            onClick={handleRefresh}
            className="btn--refreshgroup"
          >
            Undo
          </button>
        </div>
      </div>

      <div>        
        <div className="div--titleusersgroup">
          <p className="p--profile0">
          </p>
          <p className="p--profile1">
            Firstname
          </p>
          <p className="p--profile2">
            Lastname
          </p>
          <p className="p--profile3">
            Age
          </p>
          <p className="p--profile4">
            Gender
          </p>
          <p className="p--profile5">
            Email
          </p>
          <p className="p--profile6">
            Location
          </p>
        </div>

        {Object.values(tweekGroup)?.map((val, key) => (
          <div key={val.id} className="div--usersgroup">
            <img
              src={val.img}
              width="40px"
              height="40px"
              className="img--profileusers"
              alt={val.img}
            />
            <p className="p--profile1">
              {val.firstName}
            </p>
            <p className="p--profile2">
              {val.lastName}
            </p>
            <p className="p--profile3">
              {val.age}
            </p>
            <p className="p--profile4">
              {val.gender}
            </p>
            <p className="p--profile5">
              {val.email}
            </p>
            <p className="p--profile6">
              {val.location}
            </p>
            <button
              type="button"
              onClick={() => handleDelete(val.id)}
              className="btn--deletefromgroup"
            >
            </button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Profile