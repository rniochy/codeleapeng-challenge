import React from 'react';
import Button from '../button';

const Pagination = ({children}) => {
    const nextPageHandler = () => {

    }
    const previousPageHandler = () => {

    }
    return (
        <div>
             {children}
             <div className="pagination-content">
                <Button eventClick={nextPageHandler} ableButton={true} name="Previous Page" classButton="bt-pagination"/>
                <Button eventClick={nextPageHandler} ableButton={true} name="Next Page" classButton="bt-pagination" />
             </div>
        </div>
    );
}

export default Pagination;
