import logo from './logo.svg';
import './App.css';
import Navbar from './component/navBar';
import React, { useState } from 'react';
import GenCal from './component/general';
import SciCal from './component/scientific';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';



function App() {
  const [darkMode, setDarkMode] = useState("dark");

  const toggleMode = ()=>
  {
    if(darkMode === "light")
    {
      setDarkMode("dark");
      document.body.style.backgroundColor = 'white'
    }
    else
    {
      setDarkMode("light");
      document.body.style.backgroundColor = 'black'

    } 
  }

  const [genVal, setGenVal] = useState("");
  const [sciVal, setSciVal] = useState("");

  
  return (
    <div className='maindiv'>
      <Router>
        <Navbar dark={darkMode} toggle={toggleMode}/>  
        <Routes>
          <Route path="/general" element={<GenCal setVal={setGenVal} value={genVal}/>} />
          <Route path="/Scientific" element={<SciCal setVal={setSciVal} value={sciVal}/>}/>
        </Routes>
        
      </Router>
      
      
    </div>
  );
}

export default App;
