import './App.css';
import React from "react";
import Navbar from "./components/navbar";
import Section1 from './components/section1';
import About from './components/about';
import Section2 from './components/section2';
import Partners from './components/partners';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar />
      <Section1 />
      <About />
      <Section2 />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
