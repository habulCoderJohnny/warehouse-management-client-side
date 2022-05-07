import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Google = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    const navigate = useNavigate();

    if (user) {
        navigate(from, { replace: true });
    }

        return (
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-success w-50 d-block mx-auto my-2 p-0'>
                    <img className='w-25' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png' alt="" /> <br />
                    <span className='px-2'>SignIn with Google</span>
                </button>

            </div>
        );
    };

export default Google;