"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const PersonAPI_1 = require("../api/PersonAPI");
const PersonRow_1 = __importDefault(require("./PersonRow"));
const PersonTable = () => {
    const [people, setPeople] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        handleUpdate();
    }, []);
    const handleUpdate = () => __awaiter(void 0, void 0, void 0, function* () {
        const updated = yield (0, PersonAPI_1.getAllPeople)();
        setPeople(updated);
    });
    return (<div style={{ maxWidth: "90%", margin: "0 auto", fontFamily: "Jost, sans-serif" }}>

      <table className="table is-fullwidth is-striped custom-table">
        <thead>
          <tr>
            <th className="has-text-weight-bold">ID</th>
            <th className="has-text-weight-bold">NOMBRE</th>
            <th className="has-text-weight-bold">APELLIDO</th>
            <th className="has-text-weight-bold">EDAD</th>
            <th className="has-text-weight-bold">EMAIL</th>
            <th className="has-text-weight-bold">ROL</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (<PersonRow_1.default key={person.id} person={person} onUpdate={handleUpdate}/>))}
        </tbody>
      </table>
    </div>);
};
exports.default = PersonTable;
