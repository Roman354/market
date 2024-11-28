import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/MainHomePage';
import Footer from './components/Footer';
function App(): JSX.Element{
    return (
        <div className="App">    
            <Header/>
            <Main/> 
            <Footer/>  
        </div>
    );
}

export default App;
