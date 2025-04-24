"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Navbar_1 = __importDefault(require("../components/Navbar"));
const Admin_1 = __importDefault(require("../components/Admin"));
const ProductDetailPage = () => {
    return (<div className="container" style={{
            fontFamily: "Jost, sans-serif",
            marginTop: "100px",
        }}>
      <Navbar_1.default /> 
      <h1 className="title is-3 mb-4 has-text-left">Comedor</h1>
      <Admin_1.default /> 
    </div>);
};
exports.default = ProductDetailPage;
