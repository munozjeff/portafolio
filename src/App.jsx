import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/home';
import { About } from './pages/about';
import { Works } from './pages/works';
import { Contact } from './pages/contact';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/About" exact element={<About/>}/>
        <Route path="/Works" exact element={<Works/>}/>
        <Route path="/Contact" exact element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
