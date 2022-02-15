import React from "react";
import "../Home/home.css"

const Home = () => {
  return(
    <div className="container-home">
       <img src={`${process.env.PUBLIC_URL}/img/logo512.png`} width="150px" className="img-fluid img-logo"/>
    <h1 className="first-text">PERSKY</h1>
    <h1 className="second-text">BIENVENIDOS A NUESTRA TIENDA VIRTUAL,<br/>
     LO QUE ANDAS BUSCANDO AL MEJOR PRECIO</h1>
    </div>
  ) 
};

export default Home;
