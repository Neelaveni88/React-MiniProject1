import "./App.css";
import { Route, Routes } from "react-router";

import Layout from "./layout/layout";
import AboutUs from "./Home/AboutUs";
function App() {
  return (
    <>
      <div>
   
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route element={<AboutUs />} />
          {/* <AboutUs/> */}
        </Routes>
      
      </div>
    </>
  );
}

export default App;
