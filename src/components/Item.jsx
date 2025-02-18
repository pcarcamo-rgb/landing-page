import { Link } from "react-router-dom";

function Item({ id, name, price }) {
  return (
    <div className="bg-white m-2 shadow-md rounded-lg p-4 border border-blue-200 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-blue-600">{name}</h3>
      <p className="text-gray-700">
        Precio: <span className="font-bold">${price}</span>
      </p>
      <Link
        to={`/item/${id}`}
        className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Ver Detalle
      </Link>
    </div>
  );
}

export default Item;
