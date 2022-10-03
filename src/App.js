import React from "react";
import "./App.css";
import Navbar from "./componentes/Navbar/Navbar"
import { itemListContainer } from './componentes/Navbar/container/itemListContainer'


const App = () => {
    const mensaje = "Aprovechá nuestras mejores ofertas."
  
    return (
      <>
        <Navbar/>
        <itemListContainer greeting={mensaje}/>
      </>
    );
  };


export default App;
