"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DashboardChart_1 = __importDefault(require("../components/DashboardChart"));
const Navbar_1 = __importDefault(require("../components/Navbar"));
const DashboardPage = () => {
    return (<div className="container" style={{
            fontFamily: "Jost, sans-serif",
        }}>
      <Navbar_1.default /> 
      <div className="container" style={{
            fontFamily: "Jost, sans-serif",
        }}>
        <DashboardChart_1.default /> 
      </div>
    </div>);
};
exports.default = DashboardPage;
