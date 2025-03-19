import "./App.css";
import { Route, Routes } from "react-router-dom"; // Ensure you import from react-router-dom


import HomePage from "./Home/HomePage";
import Layout from "./layout/layout";
import Gallery from "./Gallery/Gallery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path="/gallery" element={<Gallery/>}/>
      </Route>
    </Routes>
  );
}

export default App;
