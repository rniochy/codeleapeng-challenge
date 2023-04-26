import React ,  { useEffect, useState }  from 'react';
import Button from '../../components/button';
import FormTitle from '../../components/formTitle';
import InputText from '../../components/inputText';
import Label from '../../components/label';
import PostItem from '../../components/postItem';
import EditItem from '../../components/editItem';
import DeleteItem from '../../components/deleteItem';
import store from '../../redux/store';
import './main.css';

const Main = () => {
     const [title, setTitle] = useState();
     const [content, setContent] = useState();
     const [update, setUpdate] = useState(false);
     const {cancel, edite, delete_} = store.getState();

    useEffect(()=>{
        console.log(edite, delete_, update);
    }, [update])

    const inputTextTitleHandler = (e)=>{
        setTitle(e.target.value);

    }
    const inputTextContentHandler = (e)=>{
        setContent(e.target.value);

    };
    const createPostHandler = () =>{
        // console.log(title, content)

    } 
    return (
        <div className='main-content'>
               {
                   (edite) && <div className='manege-actins-detele-edite'>
                        { (!cancel && delete_) && <DeleteItem  setUpdate={setUpdate}/> }
                        {(!cancel && edite) && <EditItem setUpdate={setUpdate}  />}
                    </div>
                }
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
                <PostItem setupdate ={setUpdate}/>
                <PostItem setupdate ={setUpdate}/>
                <PostItem setupdate ={setUpdate}/>
      
            </div>
    );
}
export default Main;
