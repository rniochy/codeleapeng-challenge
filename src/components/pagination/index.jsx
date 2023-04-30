import React from 'react';
import Button from '../button';
import './pagination.css'

const Pagination = ({children}) => {
    const nextPageHandler = () => {

    }
    const previousPageHandler = () => {

    }
    return (
        <div>
             {children}
             <div className="pagination-content">
                <Button eventClick={nextPageHandler} ableButton={false} name="Previous Page" classButton="bt-pagination"/>
                <Button eventClick={nextPageHandler} ableButton={false} name="Next Page" classButton="bt-pagination" />
             </div>
        </div>
    );
}

export default Pagination;
