import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ToolsSection from "./components/ToolsSection";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [selectedBtn, setSelectedBtn] = useState("products");
  const [allProducts, setAllProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get("data.json");
        setAllProducts(data.data);
      } catch (err) {
        console.error("Console the error", err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar selectedProduct={selectedProduct} />
      <Hero />
      <ToolsSection
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        allProducts={allProducts}
        selectedBtn={selectedBtn}
        setSelectedBtn={setSelectedBtn}
      />

      <ToastContainer />
    </>
  );
};

export default App;
