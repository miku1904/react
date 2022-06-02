import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Componants/Pages/Home';
import Index from './Componants/Pages/Index';
import Main from './Componants/Pages/Main';
import Profile from './Componants/Pages/Profile';



function App() {
    return (
        <>
         <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/index" element={<Index />} />
            <Route exact path="/main" element={<Main />} />
            <Route exact path="/profile" element={<Profile/>} />
          </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;
