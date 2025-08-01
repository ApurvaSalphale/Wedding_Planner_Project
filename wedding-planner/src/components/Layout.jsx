import { Outlet } from "react-router-dom";
import SearchCity from "./SearchCity";
import ProfileBar from "./ProfileBar";
import Navbar from "./NavBar";

const Layout = () => {
  return (
    <div>
      {/* Top bar with search + profile */}
      <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#7e0eb1ff" }}>
        <SearchCity />
        <ProfileBar />
      </div>

      {/* Navbar below */}
      <Navbar />

      {/* Page content */}
      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
