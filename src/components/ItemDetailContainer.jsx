import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products.js";
import ItemDetail from "./ItemDetail.jsx";
import Loader from "./Loader.jsx";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId).then((data) => setProduct(data));
  }, [itemId]);
  return <div>{product ? <ItemDetail {...product} /> : <Loader></Loader>}</div>;
}

export default ItemDetailContainer;
