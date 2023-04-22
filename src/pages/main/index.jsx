import React from 'react';
import FormTitle from '../../components/formTitle';
import InputText from '../../components/inputText';
import Label from '../../components/label';
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
                        <FormTitle 
                            title="What's on your mind?" 
                        />
                        <div className='main-post title'>
                            <Label  
                                HTMLfor="title" 
                                content="Title"
                            />
                            <InputText 
                                id={"title"} 
                                placeholder ="Hello world" 
                                eventText={inputTextTitleHandler} 
                            />
                        </div>
                        <div className='main-post content'>
                            <Label  
                                HTMLfor="content" 
                                content="Content"
                            />
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
