import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import VisitUs from './pages/VisitUs'
import ApplyForm from './components/ApplyForm'
import Programs from './components/Programs'
import Login from './pages/Login'
import Admin from './pages/Admin'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Register from './pages/Register'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HistoryLegacy from './components/HistoryLegacy'
import Facilities from './components/Facilities'
import Faculty from './components/Faculty'
import Mission from './components/Mission'
import Pnf from './components/Pnf'



function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      
      <Route path='/' element={<Landing/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/visitus' element={<VisitUs/>} />
      <Route path='/applyform' element={<ApplyForm/>} />
      <Route path='/programs' element={<Programs/>} />
      <Route path='/*' element={<Pnf/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
 <Route path='/history' element={<HistoryLegacy />} />
      <Route path='/facilities' element={<Facilities />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/faculty' element={<Faculty />} />
      <Route path='/mission' element={<Mission />} />




      </Routes>
      <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default App
