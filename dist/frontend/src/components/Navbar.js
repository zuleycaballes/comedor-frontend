"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const Navbar = () => {
    const currentPath = window.location.pathname;
    return (<nav className="navbar px-4 py-2 is-fixed-top" style={{
            backgroundColor: "#6FA4D3", // Fondo azul claro
            fontFamily: "Jost, sans-serif",
            margin: 0, // Elimina márgenes
            padding: 0, // Elimina padding
        }}>
      <div className="navbar-brand">
        <span className="navbar-item has-text-white has-text-weight-semibold is-size-4">
          El Comedor
        </span>
      </div>

      <div className="navbar-menu is-active">
        <div className="navbar-end">
          <a href="/" className={`navbar-item has-text-white ${currentPath === "/" ? "has-text-weight-bold" : ""}`}>
            Dashboard
          </a>
          <a href="/products" className={`navbar-item has-text-white ${currentPath === "/products" ? "has-text-weight-bold" : ""}`}>
            Productos
          </a>
          <a href="/entregas" className={`navbar-item has-text-white ${currentPath === "/entregas" ? "has-text-weight-bold" : ""}`}>
            Entregas
          </a>
          <a href="/donar" className={`navbar-item has-text-white ${currentPath === "/donar" ? "has-text-weight-bold" : ""}`}>
            Donar
          </a>

          <div className="navbar-item mr-4">
            <button className="button is-white is-outlined has-text-weight-semibold" onClick={() => console.log("Cerrar Sesión")}>
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
