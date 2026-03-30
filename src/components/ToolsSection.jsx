import ProductCard from "./ProductCard";

const ToolsSection = ({ setSelectedBtn, selectedBtn }) => {
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
        <ProductCard />
      </div>
    </div>
  );
};

export default ToolsSection;
