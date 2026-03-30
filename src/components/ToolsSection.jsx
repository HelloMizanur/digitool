import ProductCard from "./ProductCard";

const ToolsSection = ({
  setSelectedBtn,
  selectedBtn,
  allProducts,
  setSelectedProduct,
  selectedProduct,
}) => {
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
            Cart(2)
          </a>
        </div>

        {selectedBtn === "products" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : selectedProduct.length === 0 ? (
          <div className="flex text-5xl py-20 justify-center items-center">
            No Products
          </div>
        ) : (
          selectedProduct.map((product, idx) => {
            return <div key={idx}>Product</div>;
          })
        )}
      </div>
    </div>
  );
};

export default ToolsSection;
