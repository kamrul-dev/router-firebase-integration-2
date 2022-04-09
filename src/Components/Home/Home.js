import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../Firebase/Firebase';

const auth = getAuth(app);

const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>This is Home Page !!!</h2>
            <h2>User Found: {user?.displayName ? user.displayName : 'User Not Signed in!!'}</h2>
        </div>
    );
};

export default Home;