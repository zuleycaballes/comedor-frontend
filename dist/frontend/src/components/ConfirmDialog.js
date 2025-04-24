"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ConfirmDialog = ({ isOpen, title = "Confirmar acción", message, confirmText = "Aceptar", cancelText = "Cancelar", onConfirm, onCancel, }) => {
    if (!isOpen)
        return null;
    return (<div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#00000066",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
        }}>
      <div style={{
            background: "#ffffff",
            padding: "2rem",
            borderRadius: "10px",
            width: "90%",
            maxWidth: "400px",
            textAlign: "center",
            boxShadow: "0 4px 10px #00000033",
        }}>
        <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "1rem", color: "#363636" }}>
          {title}
        </h2>
        <p style={{ fontSize: "1rem", marginBottom: "1.5rem", color: "#555" }}>{message}</p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button onClick={onCancel} style={{
            padding: "0.5rem 1rem",
            background: "#d3d3d3",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontWeight: 600,
            cursor: "pointer",
            transition: "background 0.2s",
        }} onMouseEnter={(e) => (e.currentTarget.style.background = "#b0b0b0")} onMouseLeave={(e) => (e.currentTarget.style.background = "#d3d3d3")}>
            {cancelText}
          </button>

          <button onClick={onConfirm} style={{
            padding: "0.5rem 1rem",
            background: "#e74c3c",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontWeight: 600,
            cursor: "pointer",
            transition: "background 0.2s",
        }} onMouseEnter={(e) => (e.currentTarget.style.background = "#c0392b")} onMouseLeave={(e) => (e.currentTarget.style.background = "#e74c3c")}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>);
};
exports.default = ConfirmDialog;
