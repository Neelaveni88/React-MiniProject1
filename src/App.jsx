import "./App.css";
import { Route, Routes } from "react-router-dom"; // Ensure you import from react-router-dom

import Layout from "./layout/Layout";
import Product from "./product/Product";
import HomePage from "./Home/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/product" element={<Product />} />
      </Route>
    </Routes>
  );
}

export default App;
