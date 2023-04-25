import React from 'react';

const EditItem = () => {
    return (
            <div className='edit-item-content'>
                <div className='delete-content-title'>
                    <Label content={"Edit Item"}/>
                </div>
                <div className='edit-item-buttons' >
                    <span>
                         <Button 
                            ableButton={false} 
                            name="Cancel" 
                            classButton="cancel" 
                            />
                    </span>
                    <span> 
                        <Button 
                            ableButton={false} 
                            name="Delete" 
                            classButton="delete"
                    /></span>
                </div> 
            </div>
    );
}
export default EditItem;
