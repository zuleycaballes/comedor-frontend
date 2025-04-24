import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";  
import DonarPage from "./pages/DonarPage";  
import DashboardPage from "./pages/DashboardPage"; 
import LoginPage from "./pages/LoginPage";
import EditarPage from './pages/EditarPage';

export default function App() {
  return (
    <>
      <Routes>
        <Route path ="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/donar" element={<DonarPage />} />
        <Route path="/products/edit/:id" element={<EditarPage />} />
      </Routes>
    </>
  );
}
