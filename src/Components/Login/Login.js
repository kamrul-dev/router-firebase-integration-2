import React from 'react';
import app from '../../Firebase/Firebase';
import './Login.css';
import { getAuth } from 'firebase/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


const auth = getAuth(app);

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
    }

    return (
        <div>
            <h2>Please login first !!</h2>
            <form>
                <input type="email" name="" id="" placeholder='Your email' />
                <br />
                <input type="password" name="" id="" placeholder='Your password' />
                <br />
                <input type="submit" value="Login" />
            </form>
            <div style={{ margin: '20px' }}>
                <button onClick={handleSignInWithGoogle}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;