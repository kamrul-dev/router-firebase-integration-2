import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div>
            <h2>Please register yourself</h2>
            <form>
                <input type="text" name="" id="" placeholder='Your name' />
                <br />
                <input type="email" name="" id="" placeholder='Your email' />
                <br />
                <input type="password" name="" id="" placeholder='Your password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;