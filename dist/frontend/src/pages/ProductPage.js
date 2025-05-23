"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Navbar_1 = __importDefault(require("../components/Navbar"));
const ProductTable_1 = __importDefault(require("../components/ProductTable"));
const AddButton_1 = __importDefault(require("../components/AddButton"));
const ProductPage = () => {
    return (<div className="container" style={{
            fontFamily: "Jost, sans-serif",
            marginTop: "100px",
        }}>
      <Navbar_1.default />
      <h1 className="title is-3 mb-4 has-text-left">Productos</h1>
      <ProductTable_1.default />
      <div className="has-text-right mt-5 ml-5">
      <AddButton_1.default label="Donar Producto" to="/donar"/>
      </div>
    </div>);
};
exports.default = ProductPage;
