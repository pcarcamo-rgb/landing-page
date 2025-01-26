import CartWidget from "./CartWidget";

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
            <a href="/" className="hover:text-blue-300 transition duration-300">
              Inicio
            </a>
          </li>
          <li>
            <a
              href="/category/electronics"
              className="hover:text-blue-300 transition duration-300"
            >
              Electrónica
            </a>
          </li>
          <li>
            <a
              href="/category/clothing"
              className="hover:text-blue-300 transition duration-300"
            >
              Ropa
            </a>
          </li>
        </ul>

        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
