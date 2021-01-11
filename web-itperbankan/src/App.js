import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar.js'
import TopWrapper from './TopWrapper.js'
import Footer from './Footer.js'
import Informasi from './Informasi'
navigator.serviceWorker.register('./sw.js');

function App() {
  return (
    <div className="App">
        <NavBar/>
        <TopWrapper />
        <Informasi />
        <Footer />
    </div>
  );
}

export default App;
