import React from 'react';
import './create.css';

const CreateItem = () => {
    return (
        <div className='classitem-content'>
            <h2>Welcome to CodeLeap network!</h2>
            <div>
                <label htmlFor='button'>Please enter your username</label>
                <input  id="button"/>
                <button >ENTER</button>
            </div>
        </div>
    );
}

export default CreateItem;
