import React from 'react';
import './App.css';
import Nav from './menu'; // Убедитесь, что Nav не содержит Router
import Main from './componets/main';
import Footer from './componets/footer';
import UserProfile from './UserProfile'; // Импортируйте компонент профиля
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} /> {/* Главная страница */}
        <Route path="/profile" element={<UserProfile />} /> {/* Маршрут для профиля пользователя */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
