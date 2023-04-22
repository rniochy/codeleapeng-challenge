import React from 'react';
import './main.css';

const Main = () => {
    return (
            <div className='main-content'>
                <header>
                    <h1>CodeLeap Network</h1>
                </header>
                <section className='main-post-content-main'>
                    <div className='main-post-content'>
                        <h3 className='main-post-header-title'>What's on your mind?</h3>
                        <div className='main-post title'>
                            <label htmlFor='title'>Title</label>
                            <input  type="text" id="title" placeholder='Hello world'/>
                        </div>
                        <div className='main-post content'>
                            <label htmlFor='content'>Content</label>
                            <input type="text" id="content" placeholder='Content here'/>
                        </div>  
                    </div>    
                </section>

                </div>
    );
}
export default Main;
