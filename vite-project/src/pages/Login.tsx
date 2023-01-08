import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthenticationService from '../services/authentication-service'
import { app } from "../api/axiosconfig";
import { useAuthLogin } from '../context/AuthProvider'
import zoomImg from '../assets/background/circle.jpg'
import '../stylePages/Login.scss'


type Field = {
  value?: any
  error?: string
  isValid?: boolean
}

type Form = {
  username: Field
  password: Field
}

const Login: React.FC = () => {

  const Navigate = useNavigate()
  
  const LOGIN_URL = '/login';
  
  const [form, setForm] = useState<Form>({
    username: {value: ''},
    password: {value: ''}
  })

  const [message, setMessage] = useState<string>('Not connected!');

  const { 
    toggle,
    switchLogin,
    setUserName,
    setAuth
  } = useAuthLogin();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;
    const newField: Field = { [fieldName]: { value: fieldValue } };

    setForm({ ...form, ...newField});
  }
  //console.log(form.username, "-- form --")

  const validateForm = () => {
    let newForm: Form = form;

    // Validator username
    if (form.username.value.length < 1) {
      const errorMsg: string = 'Votre prénom doit faire au moins 3 caractères de long.';
      const newField: Field = { value: form.username.value, error: errorMsg, isValid: false };
      newForm = { ...newForm, ...{ username: newField } };
    } else {
      const newField: Field = { value: form.username.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ username: newField } };
    }

    // Validator password
    if (form.password.value.length < 1) {
      const errorMsg: string = 'Votre mot de passe doit faire au moins 6 caractères de long.';
      const newField: Field = { value: form.password.value, error: errorMsg, isValid: false };
      newForm = { ...newForm, ...{ password: newField } };
    } else {
      const newField: Field = { value: form.password.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ password: newField } };
    }
    setForm(newForm);
    return newForm.username.isValid && newForm.password.isValid;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if (isFormValid) {
      setMessage('👉  Tentative de connexion en cours ...');

      AuthenticationService
        .login(form.username.value, form.password.value)
        .then(isAuthenticated => {
          if (!isAuthenticated) {
            setMessage('🔐  Identifiant ou mot de passe incorrect.');
            return;
          } else {
            setAuth(form.username.value, form.password.value)
            setUserName(form.username.value)
            localStorage.setItem("user-info",
              JSON.stringify([form.username.value, form.password.value]))
            toggle()
            console.log("login ok")
            Navigate('/')
          }
        });
    }
  }

  return(
    <div data-testid="logintest" className="bg--loginimg">
      <div className="zoom--img">
        <img
          src={zoomImg}
          width="100%"
          height="100%"
          className="img--login"
          alt={zoomImg}
        />
      </div>

      <div className="div--submit">
        <form
          data-testid="formlog"
          onSubmit={(e) => handleSubmit(e)}
          className="submit"
          placeholder="lastname"
        >
          <h1 className="title--framelogin">Login</h1>

          {message && <div className="form-group">
            <div className="error--message">
              {message}
            </div>
          </div>
          }
          <label htmlFor="username" className="lbl--login">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={form.username.value}
            onChange={(e) => handleInputChange(e)}
            placeholder="username"
            autoComplete="off"
            className="input--login"
            required
          />
          {form.username.error &&
            <div className="error username"> 
             {form.username.error} 
            </div>
          } 
          <label htmlFor="password" className="lbl--login">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={form.password.value}
            onChange={(e) => handleInputChange(e)}
            placeholder="password"
            className="input--login"
            required
          />

          {form.password.error &&
            <div className="error password"> 
              {form.password.error} 
            </div>
          } 
          <button type="submit" className="btn--submitlogin">
            Enter
          </button>

          <p data-testid="linktestlogin" className="p--loginframe">
            <Link
              to="/subscribe"
              className="link--subscribe"
            >
              subscribe
            </Link>
          </p>

        </form>
      </div>

    </div>
  )
}

export default Login;