import { useState } from 'react'
import  { signInWithGooglePopup, createUserDocumentFromAuth } from 'utils/firebase.utils'
import FormInput from 'components/form-input'
import Button from 'components/button.jsx'

import 'style/sign-in-form.scss'


const defaultFormFields = {
  email: '',
  password: '',
}


const SignInForm = () => {
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

  const logInWithGoogle = async () => {
  }
  
  const logInWithEmail = async () => {
  }

  const handleSubmit = async (event) => {
  }
  return (
    <div className='sign-in-container'>
      <h1>Sign in with your email and password</h1>
      <form onSubmit={handleSubmit}>
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
        
        <Button onClick={logInWithGoogle} buttonType='google'>
            Sign In With Google
        </Button>
        <Button onClick={logInWithEmail} buttonType='inverted'>
            Sign In With Email 
        </Button>
      </form>
    </div>
  )
}

export default SignInForm;
