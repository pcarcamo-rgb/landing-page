import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { getProducts } from "../data/products";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts().then((products) => {
      if (categoryId) {
        setItems(products.filter((prod) => prod.category === categoryId));
      } else {
        setItems(products);
      }
    });
  }, [categoryId]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-blue-600 text-center mb-4">
        {greeting}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
