import "./App.css";
import { Route, Routes } from "react-router";

import Layout from "./layout/layout";
function App() {
  return (
    <>
      <div>
   
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      
      </div>
    </>
  );
}

export default App;
