import React from 'react'
import { useAuthLogin } from '../context/AuthProvider'
import bgProfile from '../assets/circle.jpg';
import '../stylePages/Profile.scss'


const Profile: React.FC = () => {

  const { username, tweekGroup, setTweekGroup } = useAuthLogin()
  //console.log(tweekGroup, "tweekGroup")
  const handleDelete = (id: number) => {
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

      <div className="div--maintitlepro">
        <h1 className="title--profileh1">
          Profile of
        </h1>

        <p className="p--maintitlepro">{username}</p>
      </div>

      <div className="tweekGroup--friends">
        <div className="div--profileh4">
          <h4 className="titleh4--profile">Members of your group :</h4>
        </div>
        
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
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Profile