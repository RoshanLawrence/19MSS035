import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [state,setState] =useState([])
  return (
    <div className="App">
      <button onClick={()=>{axios.get('http://104.211.219.98/numbers/primes').then((response)=>{
        console.log(response.data)
        setState(response.data)
      })
    }}>Sample</button>
    {state.map((obj,index) =>{
      return (
      <div>
        <h1>{index+1}</h1>
        <h1>{obj.numbers}</h1>
      </div>)
    })}
    </div>
  );
}

export default App;