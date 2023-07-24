import { Link } from "react-router-dom";
import Context from "../Context";
import { useContext } from "react";
import fotofondo from "../assets/img/fondo2.png";

export default function Navbar() {
  const { total } = useContext(Context);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={fotofondo} alt="Descripción de la imagen" />
      </Link>
      <Link to="/">🍕 Pizzería Mamma Mía! </Link>{" "}
      <Link to="/categoria">🍕 Categorias! </Link>{" "}
      <Link to="/carrito">
        {" "}
        <span className="carrito">🛒</span> ${total}
      </Link>
    </nav>
  );
}
