"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const ProductPage_1 = __importDefault(require("./pages/ProductPage"));
const DashboardPage_1 = __importDefault(require("./pages/DashboardPage"));
function App() {
    return (<div className="container mt-5">
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<ProductPage_1.default />}/>
        <react_router_dom_1.Route path="/dashboard" element={<DashboardPage_1.default />}/>
      </react_router_dom_1.Routes>
    </div>);
}
exports.default = App;
