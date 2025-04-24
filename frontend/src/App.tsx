import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";  
import DonarPage from "./pages/DonarPage";  
import PersonPage from "./pages/PersonPage";
import DashboardPage from "./pages/DashboardPage"; 
import LoginPage from "./pages/LoginPage";
import EditarPage from './pages/EditarPage';
import AddPersonPage from './pages/AddPersonPage'; 
import EditarPersonaPage from "./pages/EditarPersonPage";
import ProductDetailPage from "./pages/ProductDetailPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path ="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/donar" element={<DonarPage />} />
        <Route path="/personas" element={<PersonPage />} />
        <Route path="/products/edit/:id" element={<EditarPage />} />
        <Route path="/personas/add" element={<AddPersonPage />} />
        <Route path="/personas/edit/:id" element={<EditarPersonaPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />

      </Routes>
    </>
  );
}
