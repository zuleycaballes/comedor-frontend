import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";  
import DonarPage from "./pages/DonarPage";   

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/products" element={<ProductPage />} />
        <Route path="/donar" element={<DonarPage />} />
      </Routes>
    </>
  );
}
