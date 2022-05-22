import { useState } from 'react'
import  { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from 'utils/firebase.utils'
import FormInput from 'components/form-input'
import Button from 'components/button.jsx'

import 'style/sign-up-form.scss'


const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}


const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword} = formFields;

  const handleChange = (event) => {
    setFormFields(
      {...formFields, [event.target.name]: event.target.value}
    );
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch(error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      }
      // TODO handle more error codes
      console.log('User creation error', error);
    }
  }
  return (
    <div className='sign-up-container'>
      <h2> Don't have an account</h2>
      <h1>Sign Up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Display Name"
          required type='text'
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />
        
        <FormInput
          label='Email'
          required type='email'
          onChange={handleChange}
          name='email'
          value={email
        }/>
        
        <FormInput
          label='Password' 
          required 
          type='password'
          onChange={handleChange}
          name='password'
          value={password}
        />
        
        <FormInput
          label='Confirm Password' 
          required type='password'
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />

        <Button type='inverted'> Create Account </Button>
      </form>
    </div>
  )
}

export default SignUpForm;
