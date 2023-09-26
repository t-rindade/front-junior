import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './index.css'

import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<BrowserRouter>
<Routes>
<Route path="home" element={<div>              {" "}<Header /><Home />
</div>} />
<Route path="/" element={<Login />} />

</Routes>
</BrowserRouter>
  </React.StrictMode>,
)
