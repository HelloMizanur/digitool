import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GetStarted from "./components/GetStarted";
import ToolsSection from "./components/ToolsSection";
import Pricing from "./components/Pricing";
import WorkFlow from "./components/WorkFlow";
import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

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
      <Suspense
        fallback={<span className="loading loading-spinner text-error"></span>}
      >
        <ToolsSection
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          allProducts={allProducts}
          selectedBtn={selectedBtn}
          setSelectedBtn={setSelectedBtn}
        />
      </Suspense>
      <GetStarted />
      <Pricing />
      <WorkFlow />
      <Footer />

      <ToastContainer />
    </>
  );
};

export default App;
