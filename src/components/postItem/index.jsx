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
                            <span>{dateDiffCalculator(post.created_datetime)}</span>
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

function dateDiffCalculator(postDate_){
    const atualDate = new Date();
    const postDate = new Date(postDate_);

    const YearAtual = atualDate.getFullYear();
    const YearPost = postDate.getFullYear();
    const MonthAtual = atualDate.getMonth();
    const MonthPost = postDate.getMonth();
    const DayAtual = atualDate.getDate();
    const DayPost = postDate.getDate();
    const HourAtual = atualDate.getHours();
    const HourPost = postDate.getHours();
    const MinutesAtual = atualDate.getMinutes();
    const MinutesPost = postDate.getMinutes();
    const SecondsAtual = atualDate.getSeconds();
    const SecondsPost = postDate.getSeconds();

    if(isNotEquals(YearAtual,YearPost)){
         return `${YearAtual-YearPost} year(s) ago.`;
    } else if(isNotEquals(MonthAtual,MonthPost) && (DayAtual >= DayPost)){
          return `${MonthAtual-MonthPost} monht(s) ago.`;
    } else if(isNotEquals(DayAtual, DayPost)){
          
               if(MonthPost+1 ===2)
                    return diffofpost(28,DayPost,DayAtual);
               else if(isEvenMonth(MonthPost+1))
                    return diffofpost(30,DayPost,DayAtual);
               else 
                    return diffofpost(31,DayPost,DayAtual);

    } else if(isNotEquals(HourAtual, HourPost)){
               if( (MinutesAtual - MinutesPost)>=0){
                    return `${(HourAtual-HourPost)+1} hour(s) ago.`;
               }else 
                    return `${HourAtual-HourPost} hour(s) ago.`;
           
    }  else if(isNotEquals(MinutesAtual, MinutesPost)){
     return `${MinutesAtual - MinutesPost} minute(s) ago.`; 
    } else {
        return `${SecondsPost} second(s) ago.`;
    }   
}

const isEvenMonth=(month)=>{
     return month % 2===0
}
const diffofpost = (date, daypost, dayatual)=>{
     return `${(date-daypost)+dayatual} day(s) ago.`;
}
const isNotEquals=(atual, daypost)=>{
     return !(atual === daypost);
}


export default PostItem;
