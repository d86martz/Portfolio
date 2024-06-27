import React from "react"
import {Routes, Route} from "react-router-dom" 

import Header from "./components/header/header"
import Footer from "./components/footer/footer"

import "./App.scss"

import Home from "./pages/home";
import Skills from "./pages/skills";
import Portfolio from "./pages/portfolio";
import Project from "./pages/project";
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
          <Route path="/portfolio/:id" element={<Project />} />          
          <Route path="*" element={<ErrorPage />} />            
        </Routes>
        <Footer/>
      </div>  
    </div>
  );
}