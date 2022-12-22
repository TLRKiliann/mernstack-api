import React, { useState } from 'react'
import serviceRouting from '../services/serviceRouting'
import usePersonnalHook from '../hook/personnal.hook'
import { useAuthLogin } from '../context/AuthProvider'
import { UserType } from '../models/usertype'
import { useNavigate } from 'react-router-dom'
import '../stylePages/Subscribe.scss'

type Field = {
  value?: any
  label?: string
  error?: string
  isValid?: boolean
}

type Form = {
  firstName: Field
  lastName: Field
  password: Field
  age: Field
  email: Field
  location: Field
  gender: Field
}

const options: Field[] = [
  {
    label: "Male",
    value: "Male",
  },
  {
    label: "Female",
    value: "Female",
  }
]

const Subscribe: React.FC = () => {

  const Navigate = useNavigate()

  const [form, setForm] = useState<Form>({
    firstName: {value: ''},
    lastName: {value: ''},
    password: {value: ''},
    age: {value: 20},
    email: {value: ''},
    location: {value: ''},
    gender: {value: 'Male'}
  })

  const users = usePersonnalHook()
  //console.log(datas, "datas")
  const [message, setMessage] = useState<string>("")
  const [datas, setDatas] = useState<Array<UserType>>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fieldName: string = e.target.name;
    const fieldValue: string | number | boolean = e.target.value;
    const newField: Field = {[fieldName]: {value: fieldValue}}

    setForm({...form, ...newField});
  }

  const validateFormSub = () => {
    let newForm: Form = form;

    //Validate firstname
    if (form.firstName.value.length < 3) {
      const errorMsg: string = "Votre prénom doit faire minimum 3 charactères";
      const newField: Field = {value: form.firstName.value, error: errorMsg, isValid: false};
      newForm = {...newForm, ...{ firstName: newField }};
    } else {
      const newField: Field = {value: form.firstName.value, error: '', isValid: true};
      newForm = {...newForm, ...{ firstName: newField }};
    }

    //Validate password
    if (form.password.value.length < 6) {
      const errorMsg: string = "Votre mot de passe doit faire au moins 6 charatères"
      const newField: Field = {value: form.password.value, error: errorMsg, isValid: false};
      newForm = {...newForm, ...{ password: newField }};
    } else {
      const newField: Field = {value: form.password.value, error: '', isValid: true};
      newForm = {...newForm, ...{password: newField}}
    }

    setForm(newForm);
    return newForm.firstName.isValid && newForm.password.isValid;
  }

  const generateId = () => {
    const maxId: number = users.length > 0
      ? Math.max(...users?.map(d => d.id))
      : 0
    return maxId + 1;
  };

  const handleValidateSub = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isFormValid = validateFormSub();
    if (isFormValid) {
      setMessage("👉  Registration en cours ...")

      const newMember = {
        id: generateId(),
        img: "http://localhost:5173/src/assets/snapface/ronaldo.png",
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        age: form.age.value,
        email: form.email.value,
        location: form.location.value,
        gender: form.gender.value,
        mainroom: "",
        room: "",
        isConnected: false,
        signalRecieve: false,
        sentMsg: "",
        messagebox: "",
        returnConfirm: false
      }
      
      console.log(newMember, "newMember")

      serviceRouting
        .createMember(newMember)
        .then(initialData => {
          setDatas(users.concat(initialData))
        })
        .catch((err) => {
          console.log("Error during creation of new Member !")
          setDatas([])
        })
      Navigate('/login')
    } else {
      setMessage("something went wrong")
    }
  }

  return (
    <div className="subscribe">

      <form
        className="form--subscribe"
        autoComplete="off"
        onSubmit={(e) => handleValidateSub(e)}
      >
        <div className="div--subscribe">
          <h1 className="title--framesub">Subscribe</h1>

          {message && <div className="message--sub">
            {message}
            </div>
          }

          <label className="lbl--sub" htmlFor="sub">
            Firstname
          </label>
          <input
            type="text"
            name="firstName"
            value={form.firstName.value}
            onChange={(e) => handleInputChange(e)}
            placeholder="firstname"
            className="input--sub"
            required
          />

          {form.firstName.error && 
            <div 
              className="firstname--error">{form.firstName.error}
            </div>
          }

          <label className="lbl--sub" htmlFor="sub">
            Lastname
          </label>
          <input
            type="text"
            name="lastName"
            value={form.lastName.value}
            onChange={(e) => handleInputChange(e)}
            placeholder="lastname"
            className="input--sub"
            required
          />

          <label className="lbl--sub" htmlFor="sub">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={form.password.value}
            onChange={(e) => handleInputChange(e)}
            placeholder="password"
            className="input--sub"
            required
          />

          {form.password.error && 
            <div 
              className="password--error">{form.password.error}
            </div>
          }

          <label className="lbl--sub" htmlFor="sub">
            Age
          </label>
          <input
            type="number"
            name="age"
            value={form.age.value}
            onChange={(e) => handleInputChange(e)}
            min="20" max="120"
            className="input--sub"
            placeholder="age"
            required
          />

          <label className="lbl--sub" htmlFor="sub">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email.value}
            onChange={(e) => handleInputChange(e)}
            placeholder="email"
            className="input--sub"
            required
          />

          <label className="lbl--sub" htmlFor="sub">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={form.location.value}
            onChange={(e) => handleInputChange(e)}
            placeholder="location"
            className="input--sub"
            required
          />

          <div className="div--subselect">
            <label htmlFor="gender" className="lbl--sub">
              Gender : 
            </label>
            <select
              id="gender"
              name="gender"
              value={form.gender.value}
              onChange={(e) => handleInputChange(e)}
              className="select--sub"
            >
            {options.map((option) => (
              <option
                key={option.value}
                name="gender"
                value={option.value}>
                  {option.label}
              </option>
            ))}
            </select>
          </div>

        </div>

        <button type="submit" className="btn--sub">
          Sign Up
        </button>

      </form>
    </div>
  )
}

export default Subscribe
