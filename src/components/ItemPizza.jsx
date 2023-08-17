import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/catalogoPizza.css"
import fotofondo from "../assets/img/fondo2.png";



const Categoria = () => {
  

  return (
    <div>
      <h1 className="titulo-centrado">Pizza Menu</h1>

      <nav className="navbar">
      <Link to="/vegetarianaPizza">
      🍕 Vegetarinas 
        <img src={fotofondo} alt="Descripción de la imagen" />
      </Link>
      <Link to="/meatPizza">
      🍕 DE carnes!
        <img src={fotofondo} alt="Descripción de la imagen" />
      </Link>
       
      </nav>
    </div>
  );
};

export default Categoria;
