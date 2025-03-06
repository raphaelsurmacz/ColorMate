import { useState } from 'react'
import { BrowserRoute, Route, Routes } from 'react-route-dom';

import './App.css'

function App() {

    return (
        <BrowserRoute>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>

        </BrowserRoute>
    );

};
export default App;
