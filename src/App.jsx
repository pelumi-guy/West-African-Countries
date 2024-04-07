import { useState } from 'react'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CountriesList from './components/countries/CountriesList';
import "./assets/styles/layout.css";

function App() {

  return (
    <div className='wrapper'>
      <Header />
        <CountriesList />
      <Footer />
    </div>
  )
}

export default App
