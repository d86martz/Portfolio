import React from 'react'


import Me from "../assets/images/Me.webp"

import "./home.scss"

export default function Home() {              
  return (
    <div id="description">
      <h1>Présentation</h1>
      <div id="bio">
        <img 
          src={Me}
          alt="Mon portrait" />      
        <p>David Martz<br/>38 ans</p> 
      </div>
      <div id="motivation">
        <p>Après 15 ans d'expérience dans le domaine de la réfrigération comme technicien confirmé, j'ai réalisé que
        le développement et la programmation sont devenus des éléments majeurs de mon métier</p>
        <p>Dans le cadre de mon évolution professionnel et personnel, j'ai toujours pris à coeur d'acquérir de nouvelles compétences
          dans les domaines qui me passionnent.</p>
        <p>Afin d'y parvenir, j'ai suivi une formation de développeur web et aujourd'hui je souhaite appliquer et parfaire mes connaissances dans ce domaine.</p>
      </div>                                                    
    </div>
  );
};