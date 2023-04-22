import React from 'react';
import InputText from '../../components/inputText';
import './main.css';

const Main = () => {

    const inputTextTitleHandler = ()=>{

    }
    const inputTextContentHandler = ()=>{

    }
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
                            <InputText 
                                id={"title"} 
                                placeholder ="Hello world" 
                                eventText={inputTextTitleHandler} 
                            />
                        </div>
                        <div className='main-post content'>
                            <label htmlFor='content'>Content</label>
                            <InputText 
                                id={"content"} 
                                placeholder ="Content here" 
                                eventText={inputTextContentHandler} 
                            />
                        </div>  
                    </div>    
                </section>

                </div>
    );
}
export default Main;
