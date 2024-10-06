import React from 'react';
import './App.css';
import Nav from './menu';
import Main from './componets/main'
import Footer from './componets/footer';
function App() {
  return (
    <div className="App">
        <Nav/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;


