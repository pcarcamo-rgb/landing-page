const products = [
  // Electrónica
  {
    id: "1",
    name: "Smart TV 55'' 4K UHD",
    category: "electronica",
    price: 120000,
  },
  {
    id: "2",
    name: "Laptop Gamer i7 16GB RAM",
    category: "electronica",
    price: 250000,
  },
  {
    id: "3",
    name: "Auriculares Inalámbricos Bluetooth",
    category: "electronica",
    price: 15000,
  },
  {
    id: "4",
    name: "Cámara Digital 24MP",
    category: "electronica",
    price: 85000,
  },
  {
    id: "5",
    name: "Mouse y Teclado Mecánico RGB",
    category: "electronica",
    price: 30000,
  },

  // Ropa
  {
    id: "6",
    name: "Camiseta Deportiva Dry-Fit",
    category: "ropa",
    price: 5000,
  },
  {
    id: "7",
    name: "Zapatillas Running Ultra Light",
    category: "ropa",
    price: 28000,
  },
  {
    id: "8",
    name: "Campera de Invierno Impermeable",
    category: "ropa",
    price: 45000,
  },
  {
    id: "9",
    name: "Pantalón de Jean Slim Fit",
    category: "ropa",
    price: 15000,
  },
  {
    id: "10",
    name: "Vestido Casual de Verano",
    category: "ropa",
    price: 12000,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.find((prod) => prod.id === id)), 1000);
  });
};
