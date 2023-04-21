import React from 'react';
import './main.css';

const Main = () => {
    return (
        <div className='main-content'>
            <header>
                <h1>CodeLeap Network</h1>
            </header>
            <div className='main-post'>
                <h3 className='main-post-header-title'>What's your mind?</h3>
                <div className='main-post-title'>
                    <label htmlFor='title'>Title</label>
                    <input type="text" id="title" placeholder='Hello world'/>
                </div>
                <div className='main-post-content'>
                    <label htmlFor='content'>Content</label>
                    <input type="text" id="content"/>
                </div>
                
            </div>
              
        </div>
    );
}
export default Main;
