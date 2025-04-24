"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
require("./BotonA\u00F1adir.css");
const CustomButton = ({ label, onClick, to }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleClick = () => {
        if (to) {
            navigate(to);
        }
        else if (onClick) {
            onClick();
        }
    };
    return (<button className="button" onClick={handleClick}>
      {label}
    </button>);
};
exports.default = CustomButton;
