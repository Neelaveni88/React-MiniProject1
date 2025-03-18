import "./App.css";
import { Route, Routes } from "react-router-dom"; // Ensure you import from react-router-dom

import Layout from "./layout/Layout";
import HomePage from "./Home/HomePage";
import Product from "./product/Product";




function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        
      </Route>
      </Routes>
    
  );
}

export default App;
