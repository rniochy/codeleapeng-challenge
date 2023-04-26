import React from 'react';
import * as actions from '../../actions/actions';
import {AiOutlineDelete} from 'react-icons/ai';
import {FiEdit} from 'react-icons/fi';
import store from '../../redux/store';
import './post.css';

const PostItem = ({setupdate}) => {

    const editeHandler = () =>{
        store.dispatch({
            type: actions.EDITE,
            payload: {
                edite: true,
                delete_:false
             }
        }); 
        setupdate(e=>!e);
    }
    const deleteHandler = () =>{
        store.dispatch({
            type: actions.DELETE,
            payload: {
                delete_: true,
                edite: false,
                cancel: false
            }
        });
        setupdate(e=>!e);
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
