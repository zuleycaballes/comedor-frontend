"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
const react_router_dom_1 = require("react-router-dom");
const ProductPage_1 = __importDefault(require("./pages/ProductPage"));
const DonarPage_1 = __importDefault(require("./pages/DonarPage"));
const DashboardPage_1 = __importDefault(require("./pages/DashboardPage"));
const EditarPage_1 = __importDefault(require("./pages/EditarPage"));
function App() {
    return (<>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<DashboardPage_1.default />}/>
        <react_router_dom_1.Route path="/products" element={<ProductPage_1.default />}/>
        <react_router_dom_1.Route path="/donar" element={<DonarPage_1.default />}/>
        <react_router_dom_1.Route path="/products/edit/:id" element={<EditarPage_1.default />}/>
      </react_router_dom_1.Routes>
    </>);
}
