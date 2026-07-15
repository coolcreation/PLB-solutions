// src/App.jsx

import { BrowserRouter as Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
// import Footer from './components/Footer/Footer';

import Home from './pages/HomePage';
import ContactPage from './pages/ContactPage';

function App() {


  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<ContactPage />} />
    </Routes>
    </>
  )
}

export default App
