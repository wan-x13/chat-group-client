import React, { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import io from 'socket.io-client'
import "./App.css"

const socket =  io.connect('http://localhost:4000')

const App = () => {

    const [ username , setUsername] = useState('')
    const [room , setRoom] = useState('')
    return (
       <BrowserRouter>
       <div className='App'>
       <Routes>
            <Route path='/' element={<Home
             username = {username}
             setUsername = {setUsername}
             room = {room}
             setRoom = {setRoom}
             socket = {socket}
            />}/>
         </Routes>

       </div>
        
       </BrowserRouter>
    );
};

export default App;