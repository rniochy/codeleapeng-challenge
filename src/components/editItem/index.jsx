import React, { useState } from 'react';
import store from '../../redux/store';
import Button from '../button';
import Label from '../label';
import FormTitle from '../formTitle';
import InputText from '../inputText';
import * as actions from '../../actions/actions';
import './edit.css'
import fetchData from '../../actions/data';

const EditItem = ({setUpdate}) => {
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const {id} = store.getState();
     
    const inputTextContentHandler = (e) => {
        setContent(e.target.value);
         
    }
    const inputTextTitleHandler = (e) => {
        setTitle(e.target.value);
         
    }
    const cancelHandler = () =>{
        store.dispatch({
            type: actions.CANCEL,
            payload: {
                cancel: true,
                delte_:false,
                edite:false
            }
        }); 
        setUpdate(e=>!e);
    }
    const editeHandler = async () =>{
        const oj = {title, content}
        const res = await fetchData.patch(`/${id}/`,
             oj
        );
        store.dispatch({
            type: actions.CANCEL,
            payload: {
                cancel: true,
                delte_:false,
                edite:false
            }
        }); 
        const res_ = await fetchData.get("/");
        const {results,next:next_, previous:previous_} = res_.data;
        store.dispatch({
            type: actions.UPDATE,
            payload: {
                results,
                next: next_,
                previous: previous_
            }
        });
        setUpdate(e=>!e);
    }
    return (
            <div className='edit-item-content'>
                <div className='edit-item-content-title'>
                    <FormTitle
                        content={"Edit Item"}
                    />
                </div>
                <div>
                    <div className='main-post title'>
                        <Label  
                            HTMLfor="title" 
                            content="Title"
                        />
                        <InputText 
                            id={"title"} 
                            placeholder ="Hello world" 
                            eventText={inputTextTitleHandler} 
                            classToSize ="small"
                        />
                     </div>
                    <div className='main-post content'>
                        <Label  
                            HTMLfor="content" 
                            content="Content"
                        />
                        <InputText 
                            id={"content"} 
                            placeholder ="Content here" 
                            eventText={inputTextContentHandler} 
                            classToSize ="large"
                        />
                     </div>  
                </div>
                <div className='edit-item-buttons' >
                    <span>
                         <Button 
                            ableButton={false} 
                            name="Cancel" 
                            classButton="cancel" 
                            eventClick = {cancelHandler}
                            />
                    </span>
                    <span> 
                        <Button 
                            ableButton={false} 
                            name="Save" 
                            classButton="save"
                            eventClick = {editeHandler}
                    /></span>
                </div> 
            </div>
    );
}
export default EditItem;
