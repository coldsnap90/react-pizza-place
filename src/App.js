import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Routes,Route} from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
     <div className='App'>

      <NavigationBar />
      
      <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/menu" element = {<Menu />} />
      <Route path="/contact" element = {<Contact />} />
      <Route path="/about" element = {<About />} />
      </Routes>
    
      
      <Footer />
      
     </div>
      

      
  );
}

export default App;
