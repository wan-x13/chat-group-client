import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import "./App.css"

const App = () => {
    return (
       <BrowserRouter>
       <div className='App'>
       <Routes>
            <Route path='/' element={<Home/>}/>
         </Routes>

       </div>
        
       </BrowserRouter>
    );
};

export default App;