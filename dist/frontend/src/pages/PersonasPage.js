"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const PersonAPI_1 = require("../api/PersonAPI");
const Navbar_1 = __importDefault(require("../components/Navbar"));
const PersonTable_1 = __importDefault(require("../components/PersonTable"));
const PersonPage = () => {
    const [persons, setPersons] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        (0, PersonAPI_1.getAllPersons)().then((data) => {
            if (data)
                setPersons(data);
        });
    }, []);
    return (<div className="container" style={{
            fontFamily: "Jost, sans-serif",
            marginTop: "100px",
        }}>
      <Navbar_1.default />
      <h1 className="title is-3 mb-4 has-text-left">Personas</h1>
      <PersonTable_1.default persons={persons}/>
    </div>);
};
exports.default = PersonPage;
