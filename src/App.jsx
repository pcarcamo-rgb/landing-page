import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainers from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="¡Bienvenidos a MiTienda!" />}
        />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainers />} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </div>
  );
}

export default App;
