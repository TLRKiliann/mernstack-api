import React, { useState } from 'react'
import zoomImg from '../assets/circle.jpg'
import '../stylePages/Login.scss'

const Login: React.FC = () => {

  const [user, setUser] = useState<string | empty>('')
  const [password, setPassword] = useState<string | null>('')


  const handleChangeInputU = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  }

  const handleChangeInputP = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(user)
    console.log(password)
    setUser('')
    setPassword('')
  }

  return(
    <div>
      <div className="zoom--img">
        <img src={zoomImg} width="100%" height="100%" alt={zoomImg}/>
      </div>

      <form
        onSubmit={(event) => handleSubmit(event)}
        className="submit"
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={user}
          onChange={handleChangeInputU}
          placeholder="username"
          autoComplete="off"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"

          value={password}
          onChange={handleChangeInputP}
          placeholder="password"
          required
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  )
}

export default Login;