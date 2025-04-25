"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
const react_router_dom_1 = require("react-router-dom");
const ProductPage_1 = __importDefault(require("./pages/ProductPage"));
const DonatePage_1 = __importDefault(require("./pages/DonatePage"));
const PersonPage_1 = __importDefault(require("./pages/PersonPage"));
const DashboardPage_1 = __importDefault(require("./pages/DashboardPage"));
const LoginPage_1 = __importDefault(require("./pages/LoginPage"));
const EditPage_1 = __importDefault(require("./pages/EditPage"));
const AddPersonPage_1 = __importDefault(require("./pages/AddPersonPage"));
const EditPersonPage_1 = __importDefault(require("./pages/EditPersonPage"));
const ProductDetailPage_1 = __importDefault(require("./pages/ProductDetailPage"));
const AdminPage_1 = __importDefault(require("./pages/AdminPage"));
function App() {
    return (<>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<LoginPage_1.default />}/>
        <react_router_dom_1.Route path="/dashboard" element={<DashboardPage_1.default />}/>
        <react_router_dom_1.Route path="/products" element={<ProductPage_1.default />}/>
        <react_router_dom_1.Route path="/donar" element={<DonatePage_1.default />}/>
        <react_router_dom_1.Route path="/personas" element={<PersonPage_1.default />}/>
        <react_router_dom_1.Route path="/products/edit/:id" element={<EditPage_1.default />}/>
        <react_router_dom_1.Route path="/personas/add" element={<AddPersonPage_1.default />}/>
        <react_router_dom_1.Route path="/personas/edit/:id" element={<EditPersonPage_1.default />}/>
        <react_router_dom_1.Route path="/products/:id" element={<ProductDetailPage_1.default />}/>
        <react_router_dom_1.Route path="/admin" element={<AdminPage_1.default />}/>

      </react_router_dom_1.Routes>
    </>);
}
