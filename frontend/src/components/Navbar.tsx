import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav
      className="navbar px-4 py-2 is-fixed-top"
      style={{ backgroundColor: "#6FA4D3", fontFamily: "Jost, sans-serif" }}
    >
      <div className="navbar-brand">
        <span className="navbar-item has-text-white has-text-weight-semibold is-size-4">
          El Comedor
        </span>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item has-text-white" onClick={() => navigate("/dashboard")}>
            Dashboard
          </a>
          <a className="navbar-item has-text-white" onClick={() => navigate("/productos")}>
            Productos
          </a>
          <a className="navbar-item has-text-white" onClick={() => navigate("/entregas")}>
            Entregas
          </a>
          <a className="navbar-item has-text-white" onClick={() => navigate("/entregas")}>
            Donar
          </a>

          <div className="navbar-item mr-4">
            <button
              className="button is-white is-outlined has-text-weight-semibold thick-border"
              onClick={() => console.log("Cerrar Sesión")}
            >
              Cerrar Sesión
            </button>
          </div>

          <div className="navbar-item">
            <button
              className="button is-white is-outlined"
              style={{
                border: "none",
                backgroundColor: "transparent",
                padding: "0.25rem 0.5rem",
              }}
              onClick={() => console.log("Perfil")}
            >
              <FontAwesomeIcon icon={faUser} className="has-text-white" size="lg" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
