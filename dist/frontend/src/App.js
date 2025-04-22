"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const ProductPage_1 = __importDefault(require("./pages/ProductPage"));
function App() {
    return (<div className="container mt-5">
      <ProductPage_1.default />
    </div>);
}
exports.default = App;
