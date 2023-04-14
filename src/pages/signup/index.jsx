import React from 'react';
import "./signup.css"

const Signup = () => {
    return (
        <div className='signup-content'>
            <h2>Welcome to CodeLeap network!</h2>
            <div>
                <label htmlFor='button'>Please enter your username</label>
                <input  id="button"/>
                <button >ENTER</button>
            </div>
        </div>
    );
}

export default Signup;
