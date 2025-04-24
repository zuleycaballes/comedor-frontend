import { useNavigate } from "react-router-dom";
import "./BotonAñadir.css";

interface Props {
  label: string;
  onClick?: () => void;
  to?: string;
}

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
