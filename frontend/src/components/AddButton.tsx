import { useNavigate } from "react-router-dom"; 
import "./AddButton.css"; 

// Interfaz para las propiedades del componente
interface Props {
  label: string; 
  onClick?: () => void; 
  to?: string; 
}

// Componente del botón personalizado
const CustomButton: React.FC<Props> = ({ label, onClick, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to); 
    } else if (onClick) {
      onClick(); 
    }
  };

  return (
    <button className="button" onClick={handleClick}>
      {label} 
    </button>
  );
};

export default CustomButton;
