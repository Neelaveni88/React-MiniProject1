import "./App.css";
import { Route, Routes } from "react-router-dom"; // Ensure you import from react-router-dom


import HomePage from "./Home/HomePage";
import Gallery from "./Gallery/Gallery";
import Layout from "./layout/Layout";
import Product from "./product/Product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/Product" element={<Product/>}/>
      </Route>
    </Routes>
  );
}

export default App;
