import React from 'react';
import './post.css';
// AiTwotoneDelete AiOutlineDelete FiEdit
import {AiOutlineDelete} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'
import Delete from '../deleteItem';
import store from '../../redux/store';

const PostItem = () => {

    const editeHandler = () =>{
        store.dispatch({
            type: actions.EDITE,
            payload: {edite: true }
        }); 
        
    }
    const deleteHandler = () =>{
        store.dispatch({
            type: actions.DELETE,
            payload: {delete: true }
        });

    }
    return  <article className='content-post-item'>
                <div className='content-post-border'>
                    <div className='header-post-item'>
                        <h2>My first Post at CodeLeap Network</h2>
                        <div className='header-post-item-icons'>
                            <span onClick={deleteHandler}>
                                <AiOutlineDelete/>
                            </span>
                            <span onClick={editeHandler}>
                                <FiEdit/>
                            </span>
                        </div>
                    </div>
                    <div className='body-post-item'>
                        <div className='body-post-header'>
                            <span>@Rodrigo</span>
                            <span>25 minutes ago</span>
                        </div>
                        <div className='content-post'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, earum incidunt quos adipisci at doloremque delectus expedita, consequuntur illo velit fugiat aspernatur voluptatum maxime laboriosam et tenetur voluptates accusantium! Velit.
                            </p>
                        </div>
                    </div>
                </div> 
            </article>
}

export default PostItem;
