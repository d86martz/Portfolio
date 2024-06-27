import React from "react"
import {Routes, Route} from "react-router-dom" 

import Header from "./components/header/header"

import "./App.scss"

import Home from "./pages/home";
import Skills from "./pages/skills";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import Contact from "./pages/contact";
import ErrorPage from "./pages/error";

export default function App() {
  return (
    <div id="container">
      <div id="content">                                 
        <Header/>
        <Routes>                                                
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />              
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />             
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />            
        </Routes>
      </div>  
    </div>
  );
}