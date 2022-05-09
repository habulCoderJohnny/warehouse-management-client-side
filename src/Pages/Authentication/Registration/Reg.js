import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Google from '../Signin With social/Google';

const Reg = () => {
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [rePassword,setRePassword] = useState('');
  const [errors,setError] = useState('');

  const [createUserWithEmailAndPassword, user,loading,error] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});


  const navigate = useNavigate();


  const handleEmailBlur = event =>{
      setEmail(event.target.value);
  }
  const handlePasswordBlur = event =>{
      setPassword(event.target.value);
  }
  const handleRePasswordBlur = event =>{
      setRePassword(event.target.value);
  }

  const handleCreateUser = event =>{
      event.preventDefault();
      // validation ERROR Condition
      if (password !== rePassword){
          setError('Your Password did not match!');
          return;
      }
      if (password.length<6) {
          setError('password minimum must be 6 characters or longer!')
          return;
      }
   createUserWithEmailAndPassword(email,password);
  }
  if (user) {
    navigate('/home')
  }


  return (
      <div className='form-container'>
      <div>
          <h1 className='form-title'>Sign Up</h1>
          <form onSubmit={handleCreateUser}>
              <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input onBlur={handleEmailBlur} type="email" name="email" required/>
              </div>
              <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input onBlur={handlePasswordBlur} type="password" name="password" required/>
              </div>
              <div className="input-group">
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <input onBlur={handleRePasswordBlur}type="password" name="confirm-password" required/>    
              </div>
              {/* error showing & spinner in ui */}
              <p className='error'>{errors} {error?.message}</p>
              <input className='form-submit' type="submit" value="Sign Up" />
          </form>
              {/* FORM END  */}

          <p className='bg-success mx-auto mt-2 p-2'>
           Already Have an Account? <Link className='form-link' to="/login">Login</Link>
          </p>
         <Google></Google>
      </div>
  </div>
  );
};

export default Reg;