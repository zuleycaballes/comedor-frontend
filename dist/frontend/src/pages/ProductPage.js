"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Navbar_1 = __importDefault(require("../components/Navbar"));
const ProductTable_1 = __importDefault(require("../components/ProductTable"));
const ProductPage = () => {
    return (<div className="container" style={{
            fontFamily: "Jost, sans-serif",
            marginTop: "100px",
        }}>
      <Navbar_1.default />
      <ProductTable_1.default />
    </div>);
};
exports.default = ProductPage;
