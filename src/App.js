import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Componants/Pages/Home';
import Index from './Componants/Pages/Index';
import Main from './Componants/Pages/Main';



function App() {
    return (
        <>
         <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/index" element={<Index />} />
            <Route exact path="/main" element={<Main />} />
          </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;
