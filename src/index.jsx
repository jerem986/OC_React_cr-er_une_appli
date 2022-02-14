import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import './index.css';
import Survey from './pages/Survey';
import Header from './components/Header';
import Error from './components/Error';
import Results from './pages/Results/Results';
import Freelances from './pages/Freelances/Freelances';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/survey/:questionNumber" element={<Survey />}/>
        <Route path="/results" element={<Results />}/>
        <Route path="/freelance" element={<Freelances />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>,
document.getElementById('root')
)