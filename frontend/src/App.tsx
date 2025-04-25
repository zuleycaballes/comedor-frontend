import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";  
import DonatePage from "./pages/DonatePage";  
import PersonPage from "./pages/PersonPage";
import DashboardPage from "./pages/DashboardPage"; 
import LoginPage from "./pages/LoginPage";
import EditPage from './pages/EditPage';
import AddPersonPage from './pages/AddPersonPage'; 
import EditPersonaPage from "./pages/EditPersonPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AdminPage from "./pages/AdminPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path ="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/donar" element={<DonatePage />} />
        <Route path="/personas" element={<PersonPage />} />
        <Route path="/products/edit/:id" element={<EditPage />} />
        <Route path="/personas/add" element={<AddPersonPage />} />
        <Route path="/personas/edit/:id" element={<EditPersonaPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/admin" element={<AdminPage />} />

      </Routes>
    </>
  );
}
