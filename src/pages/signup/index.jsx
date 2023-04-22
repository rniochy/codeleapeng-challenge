import React, { useState }  from 'react';
import * as actions from '../../actions/actions'
import Button from '../../components/button';
import InputText from '../../components/inputText';
import Label from '../../components/label';
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
    const InputTextHandler = (e) => {
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
                    <Label 
                        HTMLfor = "button" 
                        content ="Please enter your username"
                    />
                    <InputText 
                        id={"button"} 
                        placeholder ="John Doe" 
                        eventText={InputTextHandler} 
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
