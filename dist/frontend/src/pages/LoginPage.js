"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoginForm_1 = __importDefault(require("../components/LoginForm"));
const Layout_1 = __importDefault(require("../components/Layout"));
const LoginPage = () => {
    return (<Layout_1.default>
      <LoginForm_1.default />
    </Layout_1.default>);
};
exports.default = LoginPage;
