import React from 'react'
import { useAuthLogin } from '../context/AuthProvider'
import bgProfile from '../assets/circle.jpg';
import '../stylePages/Profile.scss'


const Profile: React.FC = () => {

  const { username, tweekGroup } = useAuthLogin()

  console.log(tweekGroup, "tweekGroup")

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

      <div className="div--maintitle">
        <h1 className="title--profileh1">
          Profile {username}
        </h1>
      </div>

      <div className="tweekGroup--friends">
        <div className="div--profileh2">
          <h2 className="titleh2--profile">Members of your group :</h2>
        </div>
        {Object.values(tweekGroup)?.map((val, key) => (
          <div key={key} className="div--usersgroup">
            <img
              src={val.img}
              width="40px"
              height="40px"
              className="img--profileusers"
              alt={val.img}
            />
            <p className="p--profile">{val.firstName}</p>
            <p className="p--profile">{val.lastName}</p>
            <p className="p--profile">{val.age}</p>
            <p className="p--profile">{val.gender}</p>
            <p className="p--profile">{val.email}</p>
            <p className="p--profile">{val.location}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Profile