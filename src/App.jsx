import { useState } from 'react';
import store from './redux/store';
import Signup from '../src/pages/signup';
import './App.css';
import { useEffect } from 'react';


function App() {
  const [logged, setLogged] = useState(false);
  const [name, setName] = useState('');
    
  // AiTwotoneDelete AiOutlineDelete FiEdit
  console.log(store.getState())
  
  return (
    <div className="App">
      { logged ? <div></div> : 
        <Signup 
                logged ={logged} 
                setLogged={setLogged} 
                name={name} 
                setName={setName}
        /> 
      }
    </div>
  )
}

export default App
