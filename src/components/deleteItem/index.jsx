import React from 'react';
import './delete.css'
import Button from '../button';
import Label from '../label';
import store from '../../redux/store';
import * as actions from '../../actions/actions';

const DeleteItem = ({setUpdate}) => {

    const cancelHandler = () =>{
        store.dispatch({
            type: actions.CANCEL,
            payload: {cancel: true }
        }); 
        setUpdate(true);
    }
    return (
        <div className='delete-content'>
             <div className='delete-content-title'>
                 <Label content={"Are you sure you want to delete this item?"}/>
             </div>
             <div className='delete-content-buttons' >
               <span> 
                    <Button 
                        ableButton={false} 
                        name="Cancel" 
                        classButton="cancel" 
                        eventClick = {cancelHandler} 
                    />
                </span>
               <span> <Button ableButton={false} name="Delete" classButton="delete"/></span>
             </div> 
        </div>
    );
}

export default DeleteItem;
