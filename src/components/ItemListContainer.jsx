import PropTypes from "prop-types";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-blue-600">{greeting}</h1>
        <p className="mt-2 text-gray-600">
          Próximamente nuestro catálogo de productos
        </p>
      </div>
    </div>
  );
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;
