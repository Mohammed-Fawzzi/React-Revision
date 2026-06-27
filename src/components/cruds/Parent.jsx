import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Samsung",
      price: 50,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
      onSale: true,
    },
    {
      id: 2,
      name: "Apple",
      price: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
      onSale: false,
    },
    {
      id: 3,
      name: "Lenovo",
      price: 30,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
      onSale: true,
    },
    {
      id: 4,
      name: "Hp",
      price: 70,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
      onSale: true,
    },
    {
      id: 5,
      name: "Hp",
      price: 80,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
      onSale: false,
    },
    {
      id: 6,
      name: "Hp",
      price: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
      onSale: true,
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDelete = (productId) => {
    const copiedProduct = structuredClone(products);
    let newProducts = copiedProduct.filter(
      (product) => product.id !== productId,
    );
    setProducts(newProducts);
  };

  const handleUpdate = (productId) => {
    const copiedProduct = structuredClone(products);
    const findProduct = copiedProduct.find(
      (product) => product.id === productId,
    );
    setSelectedProduct(findProduct);
    setIsModalOpen(true);
    console.log(findProduct);
  };

  const handleSave = () => {
    const updatedProducts = products.map((product) =>
      product.id === selectedProduct.id ? selectedProduct : product,
    );

    setProducts(updatedProducts);
    setIsModalOpen(false);
  };

  return (
    <section className="w-full p-6">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {products.map((product) => (
          <Child
            key={product.id}
            product={product}
            deleteProduct={handleDelete}
            updateProduct={handleUpdate}
          />
        ))}
      </div>

      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white w-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Update Product</h2>

            <input
              className="border p-2 w-full mb-3"
              value={selectedProduct.name}
              onChange={(e) =>
                setSelectedProduct({
                  ...selectedProduct,
                  name: e.target.value,
                })
              }
            />

            <input
              type="number"
              className="border p-2 w-full mb-3"
              value={selectedProduct.price}
              onChange={(e) =>
                setSelectedProduct({
                  ...selectedProduct,
                  price: Number(e.target.value),
                })
              }
            />

            <textarea
              className="border p-2 w-full mb-3"
              value={selectedProduct.description}
              onChange={(e) =>
                setSelectedProduct({
                  ...selectedProduct,
                  description: e.target.value,
                })
              }
            />

            <div className="flex justify-between mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
