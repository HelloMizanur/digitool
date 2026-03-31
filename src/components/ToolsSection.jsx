import ProductCard from "./ProductCard";
import CardProduct from "./CardProduct";
import { toast } from "react-toastify";
const ToolsSection = ({
  setSelectedBtn,
  selectedBtn,
  allProducts,
  setSelectedProduct,
  selectedProduct,
}) => {
  const totalPriceOfCart = selectedProduct.reduce(
    (acc, item) => acc + Number(item.price),
    0,
  );
  const removeAllFromCart = () => {
    setSelectedProduct([]);
    toast.error("Remove all product from cart");
  };
  return (
    <div className="py-10 md:px-30">
      <div className=" text-center">
        <h1 className="text-3xl md:text-6xl font-bold">
          Premium Digital Tools
        </h1>
        <p className="text-lg md:text-xl text-gray-500 py-5 max-w-2xl mx-auto">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        <div className="py-5">
          <a
            onClick={() => setSelectedBtn("products")}
            className={`btn text-xl border-none ${selectedBtn === "products" ? " bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-2xl text-white " : ""}`}
          >
            Products
          </a>
          <a
            onClick={() => setSelectedBtn("card")}
            className={`btn text-xl border-none ${selectedBtn !== "products" ? " bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-2xl text-white " : ""}`}
          >
            Cart({selectedProduct.length})
          </a>
        </div>

        {selectedBtn === "products" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-4">
            {allProducts.map((product) => (
              <ProductCard
                className="w-full"
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : selectedProduct.length === 0 ? (
          <div className="flex text-5xl py-20 justify-center items-center">
            No Products
          </div>
        ) : (
          <div className="text-left w-full">
            <h2 className="text-2xl font-semibold mb-5 ">Your Cart</h2>
            <div className="flex flex-col gap-4">
              {selectedProduct.map((product) => (
                <CardProduct
                  selectedProduct={selectedProduct}
                  setSelectedProduct={setSelectedProduct}
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
            <div className="py-5 text-xl font-semibold flex justify-between items-center px-5">
              <span>Total</span>
              <span>${totalPriceOfCart}</span>
            </div>
            <button
              onClick={() => removeAllFromCart()}
              className="btn text-xl bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-2xl text-white border-none btn-block"
            >
              Proceed To Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolsSection;
