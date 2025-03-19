import "./App.css";
import { Route, Routes } from "react-router-dom"; // Ensure you import from react-router-dom
import HomePage from "./Home/HomePage";
import TodoList from "./Home/TodoList";
import Gallery from "./Gallery/Gallery";
import Layout from "./layout/Layout";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/to-do-list" element={<TodoList />} />
      </Route>
    </Routes>
  );
}

export default App;
