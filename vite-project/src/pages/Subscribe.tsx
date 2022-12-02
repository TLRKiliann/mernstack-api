import React from 'react'
import '../stylePages/Subscribe.scss'

const Subscribe: React.FC = () => {
  return(
    <div className="subscribe">

      <div className="title--subscribe">
        <h1>Subscribe</h1>
      </div>

      <form className="form--subscribe">
        <label className="lbl--sub" htmlFor="sub">Firstname</label>
        <input className="input--sub" type="text" placeholder="firstname" required />

        <label className="lbl--sub" htmlFor="sub">Lastname</label>
        <input className="input--sub" type="text" placeholder="lastname" required />

        <label className="lbl--sub" htmlFor="sub">Age</label>
        <input className="input--sub" type="number" placeholder="age" required />

        <label className="lbl--sub" htmlFor="sub">Email</label>
        <input className="input--sub" type="email" placeholder="email" required />

        <label className="lbl--sub" htmlFor="sub">Location</label>
        <input className="input--sub" type="text" placeholder="location" required />

        <select className="select--sub">
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <button className="btn--sub">Sign Up</button>
      </form>
    </div>
  )
}

export default Subscribe
