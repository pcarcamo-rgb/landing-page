function ItemDetail({ name, price }) {
  return (
    <div className="max-w-md mx-auto p-6 m-2 bg-white shadow-lg rounded-lg border border-blue-300">
      <h2 className="text-2xl font-bold text-blue-600">{name}</h2>
      <p className="text-lg text-gray-700 mt-2">
        Precio: <span className="font-semibold">${price}</span>
      </p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        Añadir al carrito
      </button>
    </div>
  );
}

export default ItemDetail;
