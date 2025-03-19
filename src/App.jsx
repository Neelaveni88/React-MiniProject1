import "./App.css";
import { Route, Routes } from "react-router-dom"; // Ensure you import from react-router-dom

import Layout from "./layout/Layout";
import HomePage from "./Home/HomePage";
import TodoList from "./Home/TodoList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
         <Route index element={<HomePage />} />
        <Route path="/to-do-list" element={<TodoList />} />
      </Route>
    </Routes>
  );
}

export default App;
