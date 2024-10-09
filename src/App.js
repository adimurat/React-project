import React from 'react';
import './App.css';
import Nav from './menu'; 
import Main from './componets/main';
import Footer from './componets/footer';
import UserProfile from './UserProfile'; 
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="/profile" element={<UserProfile />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
