import "./App.css";
import { Route, Routes } from "react-router-dom"; // Ensure you import from react-router-dom

import HomePage from "./Home/HomePage";
import TodoList from "./Home/TodoList";
import Gallery from "./Gallery/Gallery";
import Layout from "./layout/Layout";
import Product from "./product/Product";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path="/gallery" element={<Gallery/>}/>
<<<<<<< HEAD
        <Route path="/Product" element={<Product/>}/>
=======
        <Route path="/to-do-list" element={<TodoList />} />
>>>>>>> 93be31f2f7e6ec19b83f86e22856ac53ff577bf2
      </Route>
    </Routes>
  );
}

export default App;
