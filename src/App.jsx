import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ToolsSection from "./components/ToolsSection";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [selectedBtn, setSelectedBtn] = useState("products");
  const [allProducts, setAllProducts] = useState([]);

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
  console.log(allProducts);

  return (
    <>
      <Navbar />
      <Hero />
      <ToolsSection selectedBtn={selectedBtn} setSelectedBtn={setSelectedBtn} />
    </>
  );
};

export default App;
