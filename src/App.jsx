import './App.css'
import React from "react";
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

const App = ()=>{
    return (
        <div className="App">
            <Navbar/>
            <Main/>
        </div>
            
    )
}

export default App;