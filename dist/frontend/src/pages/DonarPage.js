"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Formulario_1 = __importDefault(require("../components/Formulario"));
const Navbar_1 = __importDefault(require("../components/Navbar"));
const App = () => {
    return (<div className="container" style={{
            fontFamily: "Jost, sans-serif",
            marginTop: "100px",
        }}>
        <Navbar_1.default />
        <Formulario_1.default />
    </div>);
};
exports.default = App;
