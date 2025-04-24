"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BotonA_adir_1 = __importDefault(require("../components/BotonA\u00F1adir"));
const Navbar_1 = __importDefault(require("../components/Navbar"));
const PersonTable_1 = __importDefault(require("../components/PersonTable"));
const PersonPage = () => {
    return (<div className="container" style={{
            fontFamily: "Jost, sans-serif",
            marginTop: "100px",
        }}>
      <Navbar_1.default />
      <h1 className="title is-3 mb-4 has-text-left">Personas</h1>
      <PersonTable_1.default />
      <div className="has-text-right mt-5 mr-5">
      <BotonA_adir_1.default label="Añadir Persona" to="/personas/add"/>
      </div>
    </div>);
};
exports.default = PersonPage;
