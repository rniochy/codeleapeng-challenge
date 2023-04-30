import React from 'react';
import * as actions from '../../actions/actions';
import {AiOutlineDelete} from 'react-icons/ai';
import {FiEdit} from 'react-icons/fi';
import store from '../../redux/store';
import './post.css';
import fetchData from '../../actions/data';

const PostItem = ({setupdate, post}) => {
    const {name} = store.getState();

    const editeHandler = () =>{
        store.dispatch({
            type: actions.EDITE,
            payload: {
                edite: true,
                delete_:false,
                cancel: false,
                id: post.id
             }
        }); 
        setupdate(e=>!e);
    }
    const deleteHandler = async () =>{
        store.dispatch({
            type: actions.DELETE,
            payload: {
                delete_: true,
                edite: false,
                cancel: false,
                id: post.id
            }
        });
        setupdate(e=>!e);
    }
   
    return  <article className='content-post-item'>
                <div className='content-post-border'>
                    <div className='header-post-item'>
                        <h2>Post on CodeLeap Network</h2>

                          { name === post.username ? 
                                <div className='header-post-item-icons'>
                                    <span 
                                        onClick={deleteHandler}
                                    >
                                            <AiOutlineDelete/>
                                    </span>
                                    <span 
                                        onClick={editeHandler}
                                        >
                                            <FiEdit/>
                                    </span>  
                                </div> : ''}
                    </div>
                    <div className='body-post-item'>
                        <div className='body-post-header'>
                            <span>{`@${post.username}`}</span>
                            <span>25 minutes ago</span>
                        </div>
                        <div className='content-post'>
                            <p>
                                    {post.content}    
                            </p>
                        </div>
                    </div>
                </div> 
            </article>
}

export default PostItem;
