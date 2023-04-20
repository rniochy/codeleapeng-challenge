import React, { useState }  from 'react';
import * as actions from '../../actions/actions'
import store from '../../redux/store';
import "./signup.css";


const Signup = () => {
    const [name, setName] = useState('');

    const enterHandler = () => {
         store.dispatch({
             type: actions.LOGIN,
             payload: {name}
         });
    }
    const enterInput = (e) => {
         setName(e.target.value);
         console.log(`${name}`.length )
    }

    const enableButtonToggle =()=>{
        if(`${name}`.length-1 < 2) return true;
         return false
    }

    return (
        <div className='signup-content'>
            <h2>Welcome to CodeLeap network!</h2>
            <div>
                <label htmlFor='button'>Please enter your username</label>
                <input  onChange={enterInput} id="button"/>
                <button onClick={enterHandler} disabled={enableButtonToggle()} >ENTER</button>
            </div>
        </div>
    );
}

export default Signup;
