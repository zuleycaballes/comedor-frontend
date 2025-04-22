import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <div className="container mt-5">
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;