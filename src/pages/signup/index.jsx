import React, { useState }  from 'react';
import * as actions from '../../actions/actions'
import Button from '../../components/button';
import InputText from '../../components/inputText';
import store from '../../redux/store';
import "./signup.css";


const Signup = ({logged, setLogged, name, setName}) => {
    
    const enterHandler = () => {
         setLogged(true);
         store.dispatch({
             type: actions.LOGIN,
             payload: {name, logged}
         });
    }
    const enterInput = (e) => {
         setName(e.target.value);
    }

    const enableButtonToggle =()=>{
        if(`${name}`.length-1 < 2) return true;
         return false;
    }
    return (
        <div className='signup-content-main'>
            <div className='signup-content'>
                <h2>Welcome to CodeLeap network!</h2>
                <div>
                    <label htmlFor='button'>Please enter your username</label>
                    <InputText 
                        id={"button"} 
                        placeholder ="John Doe" 
                        eventText={enterInput} 
                    />
                    <Button 
                        eventClick={enterHandler} 
                        ableButton={enableButtonToggle()} 
                        classButton={"enter"} name={"ENTER"} 
                    />
                </div>
            </div>
        </div>
    );
}

export default Signup;
