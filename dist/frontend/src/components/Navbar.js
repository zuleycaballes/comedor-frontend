"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const Navbar = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return (<nav className="navbar px-4 py-2 is-fixed-top" style={{ backgroundColor: "#6FA4D3", fontFamily: "Jost, sans-serif" }}>
      <div className="navbar-brand">
        <span className="navbar-item has-text-white has-text-weight-semibold is-size-4">
          El Comedor
        </span>
      </div>

      <div className="navbar-menu is-active">
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
            <button className="button is-white is-outlined has-text-weight-semibold thick-border" onClick={() => console.log("Cerrar Sesión")}>
              Cerrar Sesión
            </button>
          </div>

          <div className="navbar-item">
            <button className="button is-white is-outlined" style={{
            border: "none",
            backgroundColor: "transparent",
            padding: "0.25rem 0.5rem",
        }} onClick={() => console.log("Perfil")}>
              <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faUser} className="has-text-white" size="lg"/>
            </button>
          </div>
        </div>
      </div>
    </nav>);
};
exports.default = Navbar;
