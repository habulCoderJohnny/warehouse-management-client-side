import React, { useState } from 'react';
import {useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import './Login.css';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    const handleUserLogin = event =>{
        event.preventDefault();

    signInWithEmailAndPassword(email, password)

    }

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, {replace:true});
    }


    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form onSubmit={handleUserLogin}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input className='ms-4' onBlur={handleEmailBlur} type="email" name="email"  required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" required/>
                    </div>
                    {/* error showing */}
                    <p className='error'>{error?.message}</p>
                    <input className='form-submit' type="submit" value="Log in" />
                </form>

                                   {/* FORM END  */}
                                   
                <p>
                    New Client? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
                <div className="hr-area"><hr/>
                  <p className='or'>OR</p> <br />
                </div>
            </div>
        </div>
    );
};

export default Login;