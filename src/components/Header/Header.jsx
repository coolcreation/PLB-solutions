// src/components/Header/Header.jsx

import './Header.css'
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';

export default function Header() {
  return (
       <div className="header">
         <Logo />
         <Navbar />
       </div>
  );
}
