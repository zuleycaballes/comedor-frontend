import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";  
import DonarPage from "./pages/DonarPage";  
import DashboardPage from "./pages/DashboardPage"; 

export default function App() {
  return (
    <>
      <Routes>
        <Route path ="/" element={<DashboardPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/donar" element={<DonarPage />} />
      </Routes>
    </>
  );
}
