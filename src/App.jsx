// src/App.jsx

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/PLB-solutions" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
