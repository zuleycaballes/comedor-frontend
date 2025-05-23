"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Layout = ({ children }) => {
    return (<div style={{
            height: "100vh",
            fontFamily: "Jost, sans-serif",
            display: "flex",
            flexDirection: "column",
        }}>
      <div style={{ height: "25%", backgroundColor: "#6FA4D3" }}/>
      
      <div style={{
            flex: 1,
            backgroundColor: "#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "2rem",
        }}>
        {children}
      </div>
      
      <div style={{ height: "25%", backgroundColor: "#6FA4D3" }}/>
    </div>);
};
exports.default = Layout;
