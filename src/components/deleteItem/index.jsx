import React from 'react';
import './delete.css'
import Button from '../button';
import Label from '../label';
import store from '../../redux/store';
import {CANCEL} from '../../actions/actions';
import fetchData from '../../actions/data';

const DeleteItem = ({setUpdate}) => {
   const {id} = store.getState();
   
    const cancelHandler = () =>{
        store.dispatch({
            type: CANCEL,
            payload: {
                cancel: true,
                delete_:false,
                edite: false
             }
        }); 
        setUpdate(e=>!e);
    }
    const deleteHandler =  async () =>{
        const res = await fetchData.delete(`/${id}/`);
        console.log(res)
        store.dispatch({
            type: CANCEL,
            payload: {
                cancel: true,
                delete_:false,
                edite: false
             }
        }); 
        setUpdate(e=>!e);
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
                <span> <Button 
                        ableButton={false} 
                        name="Delete" 
                        classButton="delete"
                        eventClick = {deleteHandler}
                        />
                 </span>
             </div> 
        </div>
    );
}

export default DeleteItem;
