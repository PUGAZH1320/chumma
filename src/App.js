import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Adminlogin from "./components/Adminlogin";
import Userlogin from "./components/Userlogin";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="adminlogin" element={<Adminlogin />} />
          <Route path="userlogin" element={<Userlogin />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
