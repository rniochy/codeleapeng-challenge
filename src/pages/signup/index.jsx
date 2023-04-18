import React  from 'react';
import "./signup.css"

const Signup = () => {
    const enterHandler = () => {
         
    }
    return (
        <div className='signup-content'>
            <h2>Welcome to CodeLeap network!</h2>
            <div>
                <label htmlFor='button'>Please enter your username</label>
                <input  id="button"/>
                <button onClick={enterHandler} >ENTER</button>
            </div>
        </div>
    );
}

export default Signup;
