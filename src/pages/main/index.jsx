import React ,  { useEffect, useState }  from 'react';
import Button from '../../components/button';
import FormTitle from '../../components/formTitle';
import InputText from '../../components/inputText';
import Label from '../../components/label';
import PostItem from '../../components/postItem';
import EditItem from '../../components/editItem';
import DeleteItem from '../../components/deleteItem';
import store from '../../redux/store';
import fetchData from '../../actions/data';
import './main.css';

const Main = ({setLogged, setName}) => {
     const [title, setTitle] = useState();
     const [content, setContent] = useState();
     const [update, setUpdate] = useState(false);
     const {cancel, edite, delete_, results, id, name} = store.getState();


    useEffect(()=>{
        (async()=>{
            const res = await fetchData();
            const {results} = res.data;
            store.dispatch({
                type: actions.CANCEL,
                payload: {
                    cancel: true,
                    delte_:false,
                    edite:false
                }
            });
        })();
       
    }, [update])

    const logoutHandler = () => {
        setLogged(e=>!e);
        setName('');
    }

    const inputTextTitleHandler = (e)=>{
        setTitle(e.target.value);

    }
    const inputTextContentHandler = (e)=>{
        setContent(e.target.value);

    };
    const createPostHandler = async () =>{
        if(title && content){
            const obj = {
                username: name,
                created_datetime: new Date(),
                content,
                title
            };
            const res = await fetchData.post("/",
                obj
            )
            console.log(res)
        } 
        setUpdate(e=>!e);
    } 
    return (
        <div className='main-content'>
               {
                    (edite || delete_) && 
                    <div className='manege-actins-detele-edite'>
                        { (!cancel && delete_) && <DeleteItem  setUpdate={setUpdate}/> }
                        {(!cancel && edite) && <EditItem setUpdate={setUpdate}  />}
                    </div>
                }
                <header>
                    <div>
                        <h1>CodeLeap Network</h1>
                        <span>
                                <Button 
                                        eventClick={logoutHandler} 
                                        ableButton={false} 
                                        name="Lougout" 
                                        classButton ="logout-button"
                                />
                            </span>
                    </div>
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

                {
                    results.map((post, index)=> <PostItem key={post.id} post={post}  setupdate ={setUpdate}/> )
                    
                }
      
            </div>
    );
}
export default Main;
