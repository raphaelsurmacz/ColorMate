import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css'
import Header from './components/Header';
import Home from './pages/Home';

const App = () => {

    return (
        <BrowserRouter>
            
            <Header />
        
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};
export default App;