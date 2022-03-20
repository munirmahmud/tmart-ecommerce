import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginRegister from "./pages/LoginRegister";
import Shop from "./pages/Shop";

function App() {
  return (
    <div className="wrapper fixed__footer">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login-register" element={<LoginRegister />} />
      </Routes>
    </div>
  );
}

export default App;
