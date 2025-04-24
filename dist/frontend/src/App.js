"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
const react_router_dom_1 = require("react-router-dom");
const ProductPage_1 = __importDefault(require("./pages/ProductPage"));
const DonarPage_1 = __importDefault(require("./pages/DonarPage"));
const PersonPage_1 = __importDefault(require("./pages/PersonPage"));
const DashboardPage_1 = __importDefault(require("./pages/DashboardPage"));
const LoginPage_1 = __importDefault(require("./pages/LoginPage"));
const EditarPage_1 = __importDefault(require("./pages/EditarPage"));
const AddPersonPage_1 = __importDefault(require("./pages/AddPersonPage"));
const EditarPersonPage_1 = __importDefault(require("./pages/EditarPersonPage"));
const ProductDetailPage_1 = __importDefault(require("./pages/ProductDetailPage"));
function App() {
    return (<>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<LoginPage_1.default />}/>
        <react_router_dom_1.Route path="/dashboard" element={<DashboardPage_1.default />}/>
        <react_router_dom_1.Route path="/products" element={<ProductPage_1.default />}/>
        <react_router_dom_1.Route path="/donar" element={<DonarPage_1.default />}/>
        <react_router_dom_1.Route path="/personas" element={<PersonPage_1.default />}/>
        <react_router_dom_1.Route path="/products/edit/:id" element={<EditarPage_1.default />}/>
        <react_router_dom_1.Route path="/personas/add" element={<AddPersonPage_1.default />}/>
        <react_router_dom_1.Route path="/personas/edit/:id" element={<EditarPersonPage_1.default />}/>
        <react_router_dom_1.Route path="/products/:id" element={<ProductDetailPage_1.default />}/>

      </react_router_dom_1.Routes>
    </>);
}
