import React from "react";
import { toast } from "react-toastify";

const CardProduct = ({ product, setSelectedProduct, selectedProduct }) => {
  const removeCard = (currentProduct) => {
    const updatedList = selectedProduct.filter(
      (item) => item.id !== currentProduct.id,
    );

    setSelectedProduct(updatedList);
    toast.error("Remove successfully from cart");
  };

  return (
    <div className="mb-4">
      <div>
        <div className="flex justify-between shadow p-5 rounded-2xl items-center bg-white">
          <div className="flex items-center pl-5 space-x-5">
            <img
              className="w-12 h-12 object-cover rounded-lg"
              src={product.image}
              alt={product.title}
            />
            <div className="flex flex-col">
              <span className="text-xl font-semibold">{product.title}</span>
              <span className="text-gray-600 font-medium">
                $ {product.price}
              </span>
            </div>
          </div>
          <span
            onClick={() => removeCard(product)}
            className="text-lg font-bold text-red-500 cursor-pointer hover:text-red-700 transition-colors px-4"
          >
            Remove
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
