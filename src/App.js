import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './Components/HomePage';
import About from './Components/About';
// import ContactForm from './Components/ContactForm';
import NavigationBar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<ContactForm/>} />
        </Routes>
        
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;