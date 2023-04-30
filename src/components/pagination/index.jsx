import React from 'react';
import Button from '../button';
import './pagination.css'
import fetchData from '../../actions/data';
import store from '../../redux/store';
import * as actions from '../../actions/actions';

const Pagination = ({children, next, previous, setUpdate}) => {
    const nextPageHandler = async () => {
        const res = await fetchData.get(`${next}`);
        const {results,next:next_, previous:previous_} = res.data;
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
    const previousPageHandler = async () => {
        const res = await fetchData.get(`${previous}`);
        const {results,next:next_, previous:previous_} = res.data;
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
        <div>
             {children}
             <div className="pagination-content">
                <Button 
                    eventClick={previousPageHandler} 
                    ableButton={previous ? false:true} 
                    name="Previous Page" 
                    classButton="bt-pagination"
                />
                <Button 
                    eventClick={nextPageHandler} 
                    ableButton={next?false:true} 
                    name="Next Page" 
                    classButton="bt-pagination" 
                />
             </div>
        </div>
    );
}

export default Pagination;
