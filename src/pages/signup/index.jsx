import React, { useState }  from 'react';
import * as actions from '../../actions/actions';
import Button from '../../components/button';
import FormTitle from '../../components/formTitle';
import InputText from '../../components/inputText';
import Label from '../../components/label';
import store from '../../redux/store';
import "./signup.css";
import { useEffect } from 'react';
import { getData } from '../../assets/datecalculator';


const Signup = ({logged, setLogged, name, setName}) => {
      const [results, setResults] = useState();
      const [next, setNext] = useState();
      const [previous, setPrevious] = useState();

      const fetchData = async ()=>{
        const {data} =  await getData();
        const {results:result_data, next:next_data, previous:previous_data} = data;

        setResults(result_data); 
        setNext(next_data); 
        setPrevious(previous_data);
    }  
      fetchData();

    // useEffect(async ()=>{
    //     let ignore = false;
        


    //     return () => {
    //         ignore = true;
    //       }
    // },[])
    
    const enterHandler = () => {
         setLogged(true);
         store.dispatch({
             type: actions.LOGIN,
             payload: {
                name, 
                logged, 
                cancel:false,
                delete_:false,
                edite:false,
                results,
                next,
                previous
            }
         });
    }
    const InputTextHandler = (e) => {
         setName(e.target.value);
    }

    const enableButtonToggle =()=>{
        if(`${name}`.length-1 < 0) return true;
         return false;
    }
    return (
        <div className='signup-content-main'>
            <div className='signup-content'>
                <FormTitle 
                title="Welcome to CodeLeap network" 
                />
                <div>
                    <Label 
                        HTMLfor = "button" 
                        content ="Please enter your username"
                    />
                    <InputText 
                        id={"button"} 
                        placeholder ="John Doe" 
                        eventText={InputTextHandler} 
                        classToSize="small"
                    />
                    <Button 
                        eventClick={enterHandler} 
                        ableButton={enableButtonToggle()} 
                        classButton={"enter"} name={"ENTER"} 
                    />
                </div>
            </div>
        </div>
    );
}

export default Signup;
