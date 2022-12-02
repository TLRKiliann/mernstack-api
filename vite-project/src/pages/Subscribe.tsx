import React from 'react'
import '../stylePages/Subscribe.scss'

const Subscribe: React.FC = () => {
  return(
    <div className="subscribe">

      <div className="title--subscribe">
        <h1>Subscribe</h1>
      </div>

      <form className="form--subscribe">
        <div className="div--subscribe">
          <h1 className="title--framesub">Subscribe</h1>
          <label className="lbl--sub" htmlFor="sub">Firstname</label>
          <input
            className="input--sub"
            type="text"
            placeholder="firstname"
            required
          />

          <label className="lbl--sub" htmlFor="sub">Lastname</label>
          <input
            className="input--sub"
            type="text"
            placeholder="lastname"
            required
          />

          <label className="lbl--sub" htmlFor="sub">Age</label>
          <input
            className="input--sub"
            type="number"
            min="20" max="120"
            placeholder="age"
            required
          />

          <label className="lbl--sub" htmlFor="sub">Email</label>
          <input
            className="input--sub"
            type="email"
            placeholder="email"
            required
          />

          <label className="lbl--sub" htmlFor="sub">Location</label>
          <input
            className="input--sub"
            type="text"
            placeholder="location"
            required
          />
          <div className="div--subselect">
            <label htmlFor="gender" className="lbl--sub">Choose : </label>
            <select name="gender" id="gender" className="select--sub">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <button className="btn--sub">Sign Up</button>
      </form>
    </div>
  )
}

export default Subscribe
