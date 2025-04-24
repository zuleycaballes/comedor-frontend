import DashboardChart from "../components/DashboardChart";
import Navbar from "../components/Navbar";

const DashboardPage = () => {
  return (
    <div
      className="container"
      style={{
        fontFamily: "Jost, sans-serif",
      }}
    >
      <Navbar /> 
      <div
        className="container"
        style={{
          fontFamily: "Jost, sans-serif",
        }}
      >
        <DashboardChart /> 
      </div>
    </div>
  );
};

export default DashboardPage;