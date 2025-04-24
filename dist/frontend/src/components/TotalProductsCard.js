"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TotalProductsCard = ({ total }) => {
    return (<div className="box" style={{ backgroundColor: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
      <h2 className="title is-4 has-text-weight-semibold has-text-grey-dark">
        Inventario por Producto
      </h2>
      <div style={{ fontSize: '1.1rem', fontWeight: 500, color: '#6FA4D3' }}>
        Total de productos: {total}
      </div>
    </div>);
};
exports.default = TotalProductsCard;
