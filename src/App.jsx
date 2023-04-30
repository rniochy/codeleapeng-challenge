import { useState } from 'react';
import store from './redux/store';
import Signup from '../src/pages/signup';
import Main from './pages/main';

function App() {
  const [logged, setLogged] = useState(false);
  const [name, setName] = useState('');
 
   return (
            <>
              { logged ?
                <Main 
                    setLogged={setLogged}
                    setName={setName}
                /> 
                : 
                <Signup 
                      logged ={logged} 
                      setLogged={setLogged} 
                      name={name} 
                      setName={setName}
                /> 
              }
            </>
  )
}

export default App
