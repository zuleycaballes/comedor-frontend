import DashboardChart from "../components/DashboardChart";
import Navbar from "../components/Navbar";
 
const DashboardPage = () => {
  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <Navbar />
      <div
        className="container"
        style={{
          fontFamily: "Jost, sans-serif",
          marginTop: "100px",
        }}
      >
        <DashboardChart />
      </div>
    </div>
  );
};

export default DashboardPage;