import React from 'react';
import store from '../../redux/store';
import Button from '../button';
import Label from '../label';
import FormTitle from '../formTitle';
import InputText from '../inputText';
import './edit.css'

const EditItem = () => {

    const inputTextContentHandler = () => {
         
    }
    const inputTextTitleHandler = () => {

    }
    const cancelHandler = () =>{
        store.dispatch({
            type: actions.LOGIN,
            payload: {name, logged}
        });
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
                    /></span>
                </div> 
            </div>
    );
}
export default EditItem;
