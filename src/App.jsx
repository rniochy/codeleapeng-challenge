import { useState } from 'react';
import store from './redux/store';
import Signup from '../src/pages/signup';
import Main from './pages/main';
import './App.css';

function App() {
  const [logged, setLogged] = useState(false);
  const [name, setName] = useState('');

  // AiTwotoneDelete AiOutlineDelete FiEdit
  console.log(store.getState())
  
  return (
    <div className="App">
      { logged ? <Main/> : 
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
