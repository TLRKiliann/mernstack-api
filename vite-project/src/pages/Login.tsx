import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthenticationService from '../services/authentication-service'
import zoomImg from '../assets/circle.jpg'
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

  const [form, setForm] = useState<Form>({
    username: {value: ''},
    password: {value: ''}
  })

  const [message, setMessage] = useState<string>('Not connected! (koala / koalatree)');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;
    const newField: Field = { [fieldName]: { value: fieldValue } };

    setForm({ ...form, ...newField});
  }

  const validateForm = () => {
    let newForm: Form = form;

    // Validator username
    if (form.username.value.length < 3) {
      const errorMsg: string = 'Votre prénom doit faire au moins 3 caractères de long.';
      const newField: Field = { value: form.username.value, error: errorMsg, isValid: false };
      newForm = { ...newForm, ...{ username: newField } };
    } else {
      const newField: Field = { value: form.username.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ username: newField } };
    }

    // Validator password
    if (form.password.value.length < 6) {
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
      setMessage('👉 Tentative de connexion en cours ...');

      AuthenticationService
        .login(form.username.value, form.password.value)
        .then(isAuthenticated => {
          if (!isAuthenticated) {
            setMessage('🔐 Identifiant ou mot de passe incorrect.');
            return;
          }
        Navigate('/')
      });
    }
  }

  return(
    <div>
      <div className="zoom--img">
        <img src={zoomImg} width="100%" height="100%" alt={zoomImg}/>
      </div>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="submit"
      >

        {message && <div className="form-group">
          <div className="error--message">
            {message}
          </div>
        </div>
        }
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={form.username.value}
          onChange={(e) => handleInputChange(e)}
          placeholder="username"
          autoComplete="off"
          required
        />
        {form.username.error &&
          <div className="error username"> 
           {form.username.error} 
          </div>
        } 
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={form.password.value}
          onChange={(e) => handleInputChange(e)}
          placeholder="password"
          required
        />
        {form.password.error &&
          <div className="error password"> 
            {form.password.error} 
          </div>
        } 
        <button type="submit">Enter</button>
      </form>
    </div>
  )
}

export default Login;