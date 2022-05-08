import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);

    const location = useLocation();

    const [sendEmailVerification, sending, errorVerify] = useSendEmailVerification(auth);

    
    if(loading){
        return <Loading></Loading>
    }

    if (error) {
        return <p className='error'>{error?.message}</p>;
    }

    if (!user) {
        return <Navigate to="/login" state={{from:location}} replace />;
    }
    console.log(user);
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center my-5'>
            <h3 className='text-danger'>Your email not varified!</h3>
            <h4 className='text-success'>Plz varified!</h4>
            <button onClick={async () => {await sendEmailVerification(); toast('Sent email check inbox/spam');}} 
            className='btn btn-warning'>Resend Verification email</button>
        </div>
        
    }
     return children;
};

export default RequireAuth;