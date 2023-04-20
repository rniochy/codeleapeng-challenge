import { useState } from 'react';
import store from './redux/store';
import Signup from '../src/pages/signup';
import './App.css';


function App() {
     
  // AiTwotoneDelete AiOutlineDelete FiEdit
  
  console.log(store.getState())
  return (
    <div className="App">
      <Signup />
    </div>
  )
}

export default App
