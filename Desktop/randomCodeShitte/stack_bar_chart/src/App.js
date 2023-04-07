
import './App.css';
import { useContext } from 'react';
import { Store } from './Context';
import { useState,useEffect } from 'react';
import StackedBarChart from './StackedBarChart';
import Legend from './Legend';



function App() {
  const { Button1, setButton1, Button2, setButton2, Button3, setButton3 } = useContext(Store)

  useEffect(()=>{

  },[Button1, setButton1, Button2, setButton2, Button3, setButton3])
  return (
    <div className="App">
      <div className='title'>Distribution of Implant Sizes Estimated on Gonioscopy</div>
      <div className='dataContainer'>
        <StackedBarChart />
        <Legend/>
      </div>
    </div>
  );
}

export default App;


