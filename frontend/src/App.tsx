import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";  
import DonarPage from "./pages/DonarPage";  
import DashboardPage from "./pages/DashboardPage";
import PersonPage from "./pages/PersonPage";
import EditarPage from './pages/EditarPage';
import AddPersonPage from './pages/AddPersonPage'; 

export default function App() {
  return (
    <>
      <Routes>
        <Route path ="/" element={<DashboardPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/donar" element={<DonarPage />} />
        <Route path="/personas" element={<PersonPage />} />
        <Route path="/products/edit/:id" element={<EditarPage />} />
        <Route path="/personas/add" element={<AddPersonPage />} />

      </Routes>
    </>
  );
}
