import React, { useState } from 'react';
import {useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import Google from '../Signin With social/Google';
import './Login.css';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    
    //foget password recover
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    console.log(setEmail);
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

    // Reset Password function
    const resetPassword = async () => {
        if (email) {
             await sendPasswordResetEmail(email);
             toast('Sent email! Reset your Password');
            }
            else{
                toast('Please enter your email address!');
            }
        }


    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form onSubmit={handleUserLogin}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email"  required/>
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
                <p className='bg-success w-50 mt-4 h6 mx-auto p-1'>
                    New Client? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
                   {/* Reset password  */}
                   <p className='h5 text-center text-danger'>Forget Password? <button className='btn btn-primary pe-auto text-decoration-none p-1' onClick={resetPassword}>Reset Password</button></p>
                <Google></Google>
            </div>
        </div>
    );
};

export default Login;