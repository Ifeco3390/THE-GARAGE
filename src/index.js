import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Route,  
  Routes,
  Navigate,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import NotFound from './views/not-found'



const App = () => {
  return (
    <Router>
    
      <Routes>
        <Route element={<Home />}  exact path="/" />
        <Route element={<NotFound />} path="**" />
        <Route element={<Navigate to="*" />} />
      </Routes>
    </Router>
  );
};
const rootElement = document.getElementById('app');
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);