
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import About from './components/About'
import { useState } from 'react';
import Alert from './components/Alert';

import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');//wheater the dark mode is enabled or not
  const [set, setset] = useState('Enable Dark Mode')

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      setset("Enable Light Mode");
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "TextUtils - Dark Mode"
      // setInterval(() => {
      //   document.title="Install TextUtils - By Ananda"
      // }, 1000);
      // setInterval(() => {
      //   document.title="Install TextUtils Now"
      // }, 2000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setset("Enable Dark Mode");
      showAlert("Light Mode has been Enabled", "success");
      // document.title="TextUtils - Light Mode Enabled"
    }
  }
  return (
    <>

      <Router>

        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} set={set} />
        <Alert alert={alert} />
        <div className="container my-4">

          <Routes>
            <Route exact path='/about' element={<About mode={mode}/>} />
            <Route exact path='/' element={<TextForms showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode} />} />
            {/* <TextForms showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode} /> */}
            {/* // Exact keyword is used to match the exact path because react always matches partially, so Exact path is used in the above mentioned 2 Routes */}
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
