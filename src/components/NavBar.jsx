import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo de la tienda */}
        <a href="/" className="text-2xl font-bold">
          MiTienda
        </a>

        {/* Enlaces de navegación (simulados) */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/category/electronica">Electronica</Link>
          </li>
          <li>
            <Link to="/category/ropa">Ropa</Link>
          </li>
        </ul>

        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
