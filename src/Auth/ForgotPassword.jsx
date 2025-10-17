// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "../../components/Header/Header";

import Footer from '../../components/Footer/Footer'
import Home from '../Home'
import Tours from '../Tours'
import TourDetails from '../TourDetails'
import Destinations from '../Destinations'
import About from '../About'
import Contact from '../Contact'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import ForgotPassword from '../Auth/ForgotPassword'
import '../../App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tour/:id" element={<TourDetails />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App