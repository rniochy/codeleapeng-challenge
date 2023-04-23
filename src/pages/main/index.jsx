import React from 'react';
import { useState } from 'react';
import Button from '../../components/button';
import FormTitle from '../../components/formTitle';
import InputText from '../../components/inputText';
import Label from '../../components/label';
import PostItem from '../../components/postItem';
import './main.css';

const Main = () => {
     const [title, setTitle] = useState();
     const [content, setContent] = useState();

    const inputTextTitleHandler = (e)=>{
        setTitle(e.target.value);

    }
    const inputTextContentHandler = (e)=>{
        setContent(e.target.value);

    }
    const createPostHandler = () =>{
        console.log(title, content)

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
                                classToSize ="small"
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
                                classToSize ="large"
                            />
                        </div>  
                        <Button 
                            eventClick={createPostHandler} 
                            ableButton={false} 
                            name="Create" 
                            classButton ="enter create"
                        />
                    </div>    
                </section>
                <PostItem />
                <PostItem />
                <PostItem />
            </div>
    );
}
export default Main;
