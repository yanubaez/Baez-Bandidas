import React from "react";
import Logo from "../../assets/Logo.png"
import { CartWidget } from "./CartWidget/CartWidget";
import { styles } from "./Navbar.style";

const Navbar = ({ nombreUsuario, apellidoUsuario, children }) => {


    const categorias = [
      {nombre:"Inicio", id:0, ruta:"#"},
      {nombre:"Productos", id:1, ruta:"#"},
      {nombre:"Contacto", id:2, ruta:"#"},
    ];
  
    return (
      <header style={styles.container}>
        <img style={styles.imagenes} src={Logo} alt="tienda online" />
        <h1>BANDIDAS INTIMATES {nombreUsuario}</h1>
        <nav>
          {
            categorias.map((categoria)=>{
              return <a key={categoria.id} style={styles.categorias} href={categoria.ruta}>{categoria.nombre}</a>
            })
          }
        </nav>
        <CartWidget />
      </header>
    );
  };
  
  export default Navbar;